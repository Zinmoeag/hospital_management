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
        Schema::create('requests_doctor', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('degress');
            $table->string('department_id');
            $table->string('address');
            $table->string('phone');
            $table->foreignId('language_spoken');
            $table->foreignId('user_id')->unsigned();
            $table->string('form');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('requests_doctor');
    }
};
