<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExamQuestionsTable extends Migration
{
    public function up()
    {
        Schema::create('exam_questions', function (Blueprint $table) {
            $table->id();
            $table->string('exam_topic'); // 'vue_l2' or 'js_l1'
            $table->integer('question_number');
            $table->text('question_text');
            $table->string('type'); // 'TF' (True/False) or 'MC' (Multiple Choice)
            $table->json('options')->nullable(); // Storage for choices
            $table->string('correct_answer');
            $table->text('explanation')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('exam_questions');
    }
}