<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('chat_messages', function (Blueprint $table) {
            $table->string('id')->primary(); // Explicit string id used by your frontend framework
            $table->string('username');
            $table->text('content')->nullable();
            $table->string('type')->default('text'); // 'text' or 'image'
            $table->string('imageUrl')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('chat_messages');
    }
};