<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomerLogsTable extends Migration
{
    public function up()
    {
        Schema::create('customer_logs', function (Blueprint $table) {
            $table->id();
            $table->string('customer_name');
            $table->decimal('price', 10, 2);
            $table->timestamp('date')->useCurrent(); 
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('customer_logs');
    }
}