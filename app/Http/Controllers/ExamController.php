<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ExamController extends Controller
{
    /**
     * Display the specified exam questions.
     * Maps to: GET /api/exam/{id}
     */
    public function show($topic)
    {
        $questions = DB::table('exam_questions')
            ->where('exam_topic', $topic)
            ->orderBy('question_number')
            ->get()
            ->map(function ($q) {
                return [
                    'id' => $q->id,
                    'question_number' => $q->question_number,
                    'question_text' => $q->question_text,
                    'type' => $q->type,
                    'options' => json_decode($q->options, true),
                ];
            });

        return response()->json($questions);
    }

    /**
     * Store a newly created exam evaluation entry.
     * Maps to: POST /api/exam
     */
    public function store(Request $request)
    {
        $topic = $request->input('topic');
        $userAnswers = $request->input('answers', []); // format: [question_id => selected_answer]

        $dbQuestions = DB::table('exam_questions')
            ->where('exam_topic', $topic)
            ->get()
            ->keyBy('id');

        $score = 0;
        $breakdown = [];

        foreach ($dbQuestions as $id => $q) {
            $userAns = $userAnswers[$id] ?? null;
            $isCorrect = (strtoupper(trim($userAns)) === strtoupper(trim($q->correct_answer)));

            if ($isCorrect) {
                $score++;
            }

            $breakdown[] = [
                'question_number' => $q->question_number,
                'question_text' => $q->question_text,
                'user_answer' => $userAns,
                'correct_answer' => $q->correct_answer,
                'is_correct' => $isCorrect,
                'explanation' => $q->explanation
            ];
        }

        return response()->json([
            'score' => $score,
            'total' => count($dbQuestions),
            'percentage' => count($dbQuestions) > 0 ? round(($score / count($dbQuestions)) * 100, 2) : 0,
            'breakdown' => $breakdown
        ]);
    }
}