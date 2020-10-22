<?php

namespace App\Http\Controllers;

use App\Http\Requests\CartRequest;
use App\Models\Product;
use App\Services\CartService;
use App\Services\ProductsService;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class CartController extends BaseController
{
    private $productsService;
    private $cartService;

    public function __construct(
        ProductsService $productsService,
        CartService $cartService
    )
    {
        $this->productsService = $productsService;
        $this->cartService = $cartService;
    }

    /**
     * Show user cart json
     *
     * @param Request $request
     * @return mixed
     */
    public function show(Request $request)
    {
        try {
            $cart = $this->cartService->getCurrent();
            $list = $this->cartService->getProductsList($cart);

            return response()->apiSuccess($list);
        } catch (\Exeption $e) {
            return response()->apiFail($e->getMessage());
        }
    }

    public function update(CartRequest $request, Product $product)
    {
        try {
            $amount = $request->get('amount');

            if ($amount === 0) {
                $cart = $this->cartService->deleteProduct($product);
            } else {
                $cart = $this->cartService->updateProduct($product, $amount);
            }

            return response()->apiSuccess($cart);
        } catch (\Exeption $e) {
            return response()->apiFail($e->getMessage());
        }
    }
}
