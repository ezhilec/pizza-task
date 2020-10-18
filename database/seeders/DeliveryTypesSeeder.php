<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DeliveryTypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('delivery_types')->insert([
            [
                'name' => 'Delivery',
                'slug' => 'home',
                'cost' => 5.00,
                'currency' => 'usd',
                'description' => 'We deliver to your door next hour',
            ],
            [
                'name' => 'Pickup',
                'slug' => 'pickup',
                'cost' => 0,
                'currency' => 'usd',
                'description' => 'Address To Pickup: 41 West Rd, Tottenham, London N17 0RE, UK',
            ]
        ]);
    }
}
