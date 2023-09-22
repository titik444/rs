<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Doctor;

class DoctorTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Doctor::create([
            'user_id' => 2,
            'specialist_id' => 1,
            'image' => 'https://source.unsplash.com/500x500?doctor',
        ]);

        Doctor::create([
            'user_id' => 3,
            'specialist_id' => 2,
            'image' => 'https://source.unsplash.com/500x500?doctor',
        ]);

        Doctor::create([
            'user_id' => 4,
            'specialist_id' => 3,
            'image' => 'https://source.unsplash.com/500x500?doctor',
        ]);
    }
}
