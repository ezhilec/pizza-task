<?php

namespace App\Http\Controllers;

use App\Services\ProductsService;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class ProductsController extends BaseController
{
    private $productsService;

    public function __construct(
        ProductsService $productsService
    )
    {
        $this->productsService = $productsService;
    }


    /**
     * Get json list of products
     *
     * @param Request $request
     * @return mixed
     */
    public function index(Request $request)
    {
        try {
            $products = $this->productsService->getProducts();

            return response()->apiSuccess($products);
        } catch (\Exeption $e) {
            return response()->apiFail($e->getMessage());
        }
    }
}
