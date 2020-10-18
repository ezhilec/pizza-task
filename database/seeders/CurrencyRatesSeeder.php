<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class CurrencyRatesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('currency_rates')->insert([
            [
                'created_at' => '2020-10-18 00:00:00',
                'currency' => 'eur',
                'value' => 1.17,
            ],
            [
                'created_at' => '2020-10-17 00:00:00',
                'currency' => 'Dollars',
                'value' => 1.16,
            ],
            [
                'created_at' => '2020-10-16 00:00:00',
                'currency' => 'Dollars',
                'value' => 1.10,
            ]
        ]);
    }
}
