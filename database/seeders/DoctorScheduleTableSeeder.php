<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\DoctorSchedule;

class DoctorScheduleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DoctorSchedule::insert([
            [
                'doctor_id' => 1,
                'day' => 'Monday',
                'start_time' => '09:00',
                'end_time' => '17:00',
            ],
            [
                'doctor_id' => 1,
                'day' => 'Wednesday',
                'start_time' => '09:00',
                'end_time' => '12:00',
            ],
            [
                'doctor_id' => 1,
                'day' => 'Friday',
                'start_time' => '12:00',
                'end_time' => '17:00',
            ],
        ]);
    }
}
