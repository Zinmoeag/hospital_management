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
        Schema::create('appointments', function (Blueprint $table) {
            $table->id();
            $table->foreignId("doctor_id")->unsigned();
            $table->foreignId("patient_id")->unsigned();
            $table->date("appointment_date")->nullable();
            $table->time("appointment_time")->nullable();
            $table->enum("status", ["pending", "cancelled", "booked"])->default("pending");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('appointments');
    }
};
