<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use DateTimeInterface;

class ChatMessage extends Model
{
    use HasFactory;

    protected $table = 'chat_messages';

    // FIX HERE: Explicitly declare the custom string primary key column
    protected $primaryKey = 'id';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'id',
        'username',
        'content',
        'type',
        'created_at',
        'imageUrl',
        'image_url',
        'reply_to_id'
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Prepare dates for JSON serialization.
     */
    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d\TH:i:s.u\Z');
    }
}