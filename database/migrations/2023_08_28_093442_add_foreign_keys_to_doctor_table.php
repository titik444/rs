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
        Schema::table('doctor', function (Blueprint $table) {
            $table->foreignId('specialist_id', 'fk_doctor_to_specialist')->references('id')->on('specialist')->onUpdate('CASCADE')->onDelete('CASCADE')->after('id');
            $table->foreignId('user_id', 'fk_doctor_to_users')->references('id')->on('users')->onUpdate('CASCADE')->onDelete('CASCADE')->after('id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('doctor', function (Blueprint $table) {
            $table->dropForeign('fk_doctor_to_specialist');
            $table->dropForeign('fk_doctor_to_users');
        });
    }
};
