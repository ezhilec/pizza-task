<?php

namespace App\Services;

use App\Models\Currency;

class CurrencyService
{
    /**
     * Get products list
     */
    public function getCurrencies()
    {
        $currencies = Currency::all()
            ->with(['rate' => function ($query) {
                $query->orderBy('created_at')->first();
            }]);;

        return $currencies;
    }
}
