<?php

namespace App\Http\Controllers;

use App\Events\MessageSent;
use App\Models\ChatMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Exception;

class ChatController extends Controller
{
    public function index()
    {
        $messages = ChatMessage::orderBy('created_at', 'asc')->get();
        return response()->json($messages);
    }

    public function store(Request $request) 
    {
        $messageId = $request->id ?? ((string) microtime(true) . '-' . bin2hex(random_bytes(3)));
        $currentTimestamp = now()->toISOString();

        $data = [
            'id'          => $messageId,
            'username'    => $request->input('username', 'Unknown'),
            'content'     => $request->input('content', ''),
            'type'        => $request->input('type', 'text'),
            'created_at'  => $request->input('created_at', $currentTimestamp),
            'reply_to_id' => $request->input('reply_to_id', null),
        ];

        // Handle incoming file uploads (Images or Videos)
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $mimeType = $file->getMimeType();
            $path = $file->store('uploads', 'public');
            $fullUrl = asset('storage/' . $path);
            
            $data['imageUrl'] = $fullUrl; // Storing the media resource URL
            
            if (str_contains($mimeType, 'video')) {
                $data['content'] = 'Video sent';
                $data['type']    = 'video';
            } else {
                $data['content'] = 'Image sent';
                $data['type']    = 'image';
            }
        }

        $chat = ChatMessage::create($data);
        $freshChat = $chat->fresh(); 
        $chatArray = $freshChat ? $freshChat->toArray() : $data;

        if (!isset($chatArray['created_at'])) {
            $chatArray['created_at'] = $currentTimestamp;
        }

        if (isset($chatArray['imageUrl'])) {
            $chatArray['image_url'] = $chatArray['imageUrl'];
        }

        try {
            broadcast(new MessageSent($chatArray))->toOthers();
            Log::info('Broadcast triggered successfully:', $chatArray);
        } catch (Exception $e) {
            Log::error('Pusher Broadcasting Failed in store(): ' . $e->getMessage());
        }
        
        return response()->json($chatArray);
    }

    public function update(Request $request, $id)
    {
        $uniqueId = (string) microtime(true) . '-' . bin2hex(random_bytes(3));

        $data = [
            'id'          => $uniqueId,
            'username'    => 'System',
            'content'     => "{$request->username} joined the chat",
            'type'        => 'text',
            'created_at'  => now()->toISOString(), 
        ];

        try {
            broadcast(new MessageSent($data))->toOthers();
            Log::info('System Join Broadcast triggered:', $data);
        } catch (Exception $e) {
            Log::error('Pusher Broadcasting Failed in update(): ' . $e->getMessage());
        }

        return response()->json(['status' => 'joined']);
    }
}