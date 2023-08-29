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
                'name' => 'Dokter Umum',
                'description' => 'Dokter Umum',
                'image' => 'https://source.unsplash.com/500x500?medical',
            ], [
                'name' => 'Dokter Gigi',
                'description' => 'Dokter Gigi',
                'image' => 'https://source.unsplash.com/500x500?medical',
            ], [
                'name' => 'Kandungan & Kebidanan',
                'description' => 'Kandungan & Kebidanan',
                'image' => 'https://source.unsplash.com/500x500?medical',
            ]
        ]);
    }
}
