<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('users')->insert([
            'created_at' => '2020-10-18 00:00:00',
            'name' => 'Test user',
            'email' => 'test@gmail.com',
            'password' => Hash::make('password'),
            'phone' => '+79991112233',
            'currency' => 'usd',
        ]);
    }
}
