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
        Schema::table('appointment', function (Blueprint $table) {
            $table->foreignId('doctor_id', 'fk_appointment_to_doctor')->references('id')->on('doctor')->onUpdate('CASCADE')->onDelete('CASCADE')->after('id');
            $table->foreignId('patient_id', 'fk_appointment_to_patient')->references('id')->on('patient')->onUpdate('CASCADE')->onDelete('CASCADE')->after('id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('appointment', function (Blueprint $table) {
            $table->dropForeign('fk_appointment_to_doctor');
            $table->dropForeign('fk_appointment_to_patient');
        });
    }
};
