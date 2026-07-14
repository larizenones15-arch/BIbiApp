<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ExcelExamController extends Controller
{
    // Fetches the questions cleanly without loading model files
    public function index()
    {
        try {
            $questions = DB::table('excel_questions')
                ->orderBy('question_number', 'asc')
                ->get();

            // Transform raw collection values to process json options string and mask security fields
            $sanitizedQuestions = $questions->map(function ($q) {
                return [
                    'id' => $q->id,
                    'question_number' => $q->question_number,
                    'question_text' => $q->question_text,
                    'type' => $q->type,
                    'options' => json_decode($q->options, true)
                ];
            });

            return response()->json($sanitizedQuestions, 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    // Handles answer verification directly using DB query builder lines
    public function store(Request $request)
    {
        try {
            $userAnswers = $request->input('answers', []);
            $questions = DB::table('excel_questions')->orderBy('question_number', 'asc')->get();

            $score = 0;
            $totalQuestions = $questions->count();
            $gradedResults = [];

            foreach ($questions as $question) {
                $submittedAnswer = $userAnswers[$question->id] ?? null;
                $isCorrect = ($submittedAnswer === $question->correct_answer);

                if ($isCorrect) {
                    $score++;
                }

                $gradedResults[] = [
                    'id' => $question->id,
                    'question_number' => $question->question_number,
                    'submitted_answer' => $submittedAnswer,
                    'correct_answer' => $question->correct_answer,
                    'is_correct' => $isCorrect,
                    'explanation' => $question->explanation
                ];
            }

            return response()->json([
                'score' => $score,
                'total' => $totalQuestions,
                'percentage' => $totalQuestions > 0 ? round(($score / $totalQuestions) * 100, 2) : 0,
                'results' => $gradedResults
            ], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}