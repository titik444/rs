<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Specialist;

class SpecialistTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Specialist::insert([
            [
                'name' => 'General Practitioner',
                'description' => 'General Practitioner',
                'image' => 'https://source.unsplash.com/500x500?medical',
            ], [
                'name' => 'Dentist',
                'description' => 'Dentist',
                'image' => 'https://source.unsplash.com/500x500?medical',
            ], [
                'name' => 'Obstetrics & Gynecology',
                'description' => 'Obstetrics & Gynecology',
                'image' => 'https://source.unsplash.com/500x500?medical',
            ]
        ]);
    }
}
