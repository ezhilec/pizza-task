<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class OrderStatusesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('order_statuses')->insert([
            [
                'name' => 'New',
                'slug' => 'new',
            ],
            [
                'name' => 'Processing',
                'slug' => 'processing',
            ],
            [
                'name' => 'Finished',
                'slug' => 'finished',
            ]
        ]);
    }
}
