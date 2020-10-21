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
     * Get current user cart
     */
    public function getCurrent() : Cart
    {
        if (auth()->user()) {
            return $this->getByUserId();
        }

        return $this->getByGuestId();
    }

    /**
     * Get cart for api
     *
     * @param $cart
     * @return mixed
     */
    public function getProductsList($cart)
    {
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
     * @param bool $plus
     * @return mixed
     */
    public function updateProduct(Product $product, int $amount = 1, bool $plus = false)
    {
        $cart = $this->getCurrent();

        $cartProduct = $cart->cartProducts()->firstOrNew([
            'product_id' => $product->id
        ]);

        $cartProduct->amount = $plus ? $cartProduct->amount + $amount : $amount;
        $cartProduct->price = $product->price;
        $cartProduct->currency = $product->currency;

        $cartProduct->save();

        $list = $this->getProductsList($cart);
        return $list;
    }

    /**
     * Add/Update product in the cart
     *
     * @param Product $product
     * @param int $amount
     * @return mixed
     */
    public function deleteProduct(Product $product)
    {
        $cart = $this->getCurrent();

        $cartProduct = $cart->cartProducts()->where([
            'product_id' => $product->id
        ]);

        $cartProduct->delete();

        $list = $this->getProductsList($cart);
        return $list;
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
