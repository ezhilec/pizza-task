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
    public function getCurrent(): Cart
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
        $result = $cart->products()
            ->orderByDesc('carts_products.created_at')
            ->get()
            ->map(function ($item) {
                return [
                    'amount' => $item->pivot->amount,
                    'price' => $item->pivot->price,
                    'currency' => $item->pivot->currency,
                    'product' => [
                        'id' => $item->id,
                        'slug' => $item->slug,
                        'name' => $item->name,
                        'image_url' => $item->image_url
                    ]
                ];
            });

        return $result;
    }

    /**
     * Add/Update product in the cart
     *
     * @param Product $product
     * @param int $amount
     * @return mixed
     */
    public function updateProduct(Product $product, int $amount = 1)
    {
        $cart = $this->getCurrent();

        $cart->products()->syncWithoutDetaching([
            $product->id => [
                'amount' => $amount,
                'price' => $product->price,
                'currency' => $product->currency
            ]
        ]);

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

        $cart->products()->detach($product->id);

        $list = $this->getProductsList($cart);
        return $list;
    }

    /**
     * Get by cookie id
     */
    private function getByGuestId(): Cart
    {
        $guestId = $this->guestIdService->get();

        $cart = Cart::firstOrCreate(['session_id' => $guestId]);

        return $cart;
    }

    /**
     * Get by user id
     */
    private function getByUserId(): Cart
    {
        $userId = auth()->user()->id;

        $cart = Cart::doesntHave('order')
            ->latest()
            ->firstOrCreate(['user_id' => $userId]);

        return $cart;
    }
}
