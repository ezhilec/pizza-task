<?php

namespace Database\Seeders;

use App\Models\Currency;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $currencies = Currency::pluck('slug')->toArray();

        $productDescriptions = [
            [
                'name' => 'Margherita',
                'description' => 'Fresh Tomato Sauce, Mozzarella, Organic Oregano Olive oil & Fresh Basil'
            ],
            [
                'name' => 'Four Cheeses',
                'description' => 'Tomato Sauce, Mozzarella, Taleggio, Parmesan Cheese, Gorgonzola Dolce Latte, Olive Oil & Organic Oregano'
            ],
            [
                'name' => 'Vegetarian Pizza',
                'description' => 'Tomato Sauce, Mozzarella, Garlic Spinach, Aubergine, Grilled Peppers, Caramelised, Onions & Organic Oregano'
            ],
            [
                'name' => 'Hot Chorizo',
                'description' => 'Tomato Sauce, Mozzarella, Chorizo, Spicy Salami, Jalapeno, Chilli Flakes, Olive Oil & Organic Oregano'
            ],
            [
                'name' => 'Capricciosa',
                'description' => 'Tomato Sauce, Mozzarella, Smoked Ham, Green Peas, Mushrooms, Onions, Olives, Sweetcorn & Organic Oregano'
            ],
            [
                'name' => 'Tuna Marinara',
                'description' => 'Tomato Sauce, Tuna, Caramelised Onions, Green Peas, Black Olives, Green Pesto, Garlic Olive Oil & Oregano'
            ],
            [
                'name' => 'Chilli Pork Sausage',
                'description' => 'Tomato Sauce, Mozzarella, Fresh Pork Sausage, Onions, Taleggio Cheese & Gorgonzola, Chilli Flakes & Oregano'
            ],
            [
                'name' => 'Stef The Chef Pizza',
                'description' => 'Tomato sauce, mozzarella, sauteed chicken and herbs, caramelised onions, olives, mushroom and gorgonzola.'
            ],
            [
                'name' => 'Vegetarian Calzone',
                'description' => 'Tomato Sauce, Mozzarella, Grilled Peppers, Aubergines, Mushrooms, Caramelised Onions, Black Olives'
            ],
            [
                'name' => 'Ham Chef Calzone',
                'description' => 'Fresh Tomato Sauce, Mozzarella, Smoked Ham, Olives, Taleggio, Parmesan Cheese, Olive Oil & Organic Oregano'
            ],
        ];

        $products = [];

        foreach ($productDescriptions as $i => $product) {
            $row = [];

            $row['created_at'] = '2020-10-18 00:00:00';
            $row['name'] = $product['name'];
            $row['description'] = $product['description'];
            $row['slug'] = Str::slug($product['name'], '-');
            $row['price'] = rand(1 * 10, 10 * 10) / 10; // 1.0 - 10.0
            $row['currency'] = $currencies[array_rand($currencies)];
            $row['image'] = ($i + 1) . ".jpg";
            $row['priority'] = $i + 1;

            $products[] = $row;
        }

        \DB::table('products')->insert($products);
    }
}
