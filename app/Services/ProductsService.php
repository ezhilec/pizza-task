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
        $products = Product::query()
            ->orderBy('priority')
            ->get();

        return $products;
    }
}
