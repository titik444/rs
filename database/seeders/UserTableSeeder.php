<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = User::create([
            'name'           => 'Super Admin',
            'email'          => 'admin@test.com',
            'password'       => Hash::make('admin1234'),
            'created_at'     => date('Y-m-d H:i:s'),
            'updated_at'     => date('Y-m-d H:i:s'),
        ]);
        $admin->assignRole('admin');

        $doctor = User::create([
            'name'           => 'Dr. Reisa Broto Asmoro',
            'email'          => 'doctor@test.com',
            'password'       => Hash::make('doctor1234'),
            'created_at'     => date('Y-m-d H:i:s'),
            'updated_at'     => date('Y-m-d H:i:s'),
        ]);
        $doctor->assignRole('doctor');
    }
}
