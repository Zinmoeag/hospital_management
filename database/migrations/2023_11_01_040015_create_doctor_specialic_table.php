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
        Schema::create('doctor_specialic', function (Blueprint $table) {
            $table->primary(['doctor_id',"specialic_id"]);
            $table->foreignId("doctor_id")->unsigned();
            $table->foreignId('specialic_id')->unsigned();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('doctor_specialic');
    }
};
