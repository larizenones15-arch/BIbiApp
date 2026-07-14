<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('actual_expenses', function (Blueprint $table) {
            $table->id();
            $table->timestamp('date')->useCurrent();
            $table->string('spender'); // 'larize' or 'mj'
            $table->string('item_name');
            $table->decimal('amount', 12, 2);
            $table->string('category'); // 'Savings', 'Emergency', 'Needs', 'Wants', 'DF'
        });
    }

    public function down()
    {
        Schema::dropIfExists('actual_expenses');
    }
};