<?php

namespace App\Services;

use App\Models\Product;

class ProductsService
{
    /**
     * Get products list
     */
    public function getProducts()
    {
        $products = Product::all()
            ->sortBy('priority');

        return $products;
    }
}
