<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('excel_questions', function (Blueprint $table) {
            $table->id();
            $table->integer('question_number');
            $table->text('question_text');
            $table->string('type'); // 'TF' or 'MC'
            $table->text('options')->nullable(); // JSON string data structure for options
            $table->string('correct_answer');
            $table->text('explanation');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('excel_questions');
    }
};