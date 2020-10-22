<?php

namespace App\Services;

use App\Models\Currency;
use App\Models\CurrencyRate;

class CurrencyService
{
    /**
     * Get products list
     */
    public function getCurrencies()
    {
        $currencies = Currency::query()
            ->addSelect(['rate' => CurrencyRate::select('value')
                ->whereColumn('currency_rates.currency', 'currencies.slug')
                ->orderBy('created_at', 'desc')
                ->limit(1)
            ])
            ->get();

        return $currencies;
    }
}
