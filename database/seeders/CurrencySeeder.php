<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class CurrencySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('currencies')->insert([
            [
                'name' => 'Dollars',
                'slug' => 'usd',
                'is_default' => true,
            ],
            [
                'name' => 'Euro',
                'slug' => 'eur',
                'is_default' => false,
            ]
        ]);
    }
}
