<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Services\CartService;
use App\Services\CurrencyService;
use App\Services\ProductsService;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class CurrenciesController extends BaseController
{
    private $currencyService;

    public function __construct(
        CurrencyService $currencyService
    )
    {
        $this->currencyService = $currencyService;
    }

    /**
     * Show user cart json
     *
     * @param Request $request
     * @return mixed
     */
    public function index(Request $request)
    {
        try {
            $currencies = $this->currencyService->getCurrencies();

            return response()->apiSuccess($currencies);
        } catch (\Exeption $e) {
            return response()->apiFail($e->getMessage());
        }
    }

}
