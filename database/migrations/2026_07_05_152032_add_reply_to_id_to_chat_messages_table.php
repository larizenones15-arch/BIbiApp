<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('chat_messages', function (Blueprint $blueprint) {
            // Adds the column cleanly without disrupting your old rows
            $blueprint->string('reply_to_id')->nullable()->after('id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('chat_messages', function (Blueprint $blueprint) {
            // Allows you to roll back safely later if needed
            $blueprint->dropColumn('reply_to_id');
        });
    }
};