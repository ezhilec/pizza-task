<?php

namespace App\Services;

use App\Models\Cart;
use App\Models\Product;

class CartService
{
    private $guestIdService;

    public function __construct(
        GuestIdService $guestIdService
    )
    {
        $this->guestIdService = $guestIdService;
    }

    /**
     * Gett current user cart
     */
    public function getCurrent()
    {
        if (auth()->user()) {
            $cart = $this->getByUserId();
        }

        $cart = $this->getByGuestId();

        $result = $cart->cartProducts()
                        ->with('product')
                        ->get();

        return $result;
    }

    /**
     * Add/Update product in the cart
     *
     * @param Product $product
     * @param int $amount
     */
    public function updateProduct(Product $product, int $amount = 1) : Cart
    {
        $cart = $this->getCurrent();

        $cartProduct = $cart->cartProducts()->firstOrNew([
            'product_id' => $product->id
        ]);

        $cartProduct->amount = $amount;
        $cartProduct->price = $product->price;
        $cartProduct->currency = $product->currency;

        $cartProduct->save();

        return $cart;
    }

    /**
     * Get by cookie id
     */
    private function getByGuestId() : Cart
    {
        $guestId = $this->guestIdService->get();

        $cart = Cart::firstOrCreate(['session_id' => $guestId]);

        return $cart;
    }

    /**
     * Get by user id
     */
    private function getByUserId() : Cart
    {
        $userId = auth()->user()->id;

        $cart = Cart::doesntHave('order')
                    ->latest()
                    ->firstOrCreate(['user_id' => $userId]);

        return $cart;
    }
}
