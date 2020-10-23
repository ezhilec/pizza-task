<?php

namespace App\Services;

use App\Models\DeliveryType;
use App\Models\Product;

class DeliveryService
{
    /**
     * Get products list
     */
    public function getTypes()
    {
        $types = DeliveryType::all();

        return $types;
    }

    public function getBySlug($slug)
    {
        $type = DeliveryType::where('slug', $slug)
            ->first();

        return $type;
    }
}
