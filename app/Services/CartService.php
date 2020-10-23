<?php

namespace App\Services;

use App\Models\Cart;
use App\Models\Currency;
use App\Models\Product;
use Illuminate\Support\Collection;

class CartService
{
    private $guestIdService;

    private $currencyService;

    public function __construct(
        GuestIdService $guestIdService,
        CurrencyService $currencyService
    )
    {
        $this->guestIdService = $guestIdService;
        $this->currencyService = $currencyService;
    }

    /**
     * Get current user cart
     */
    public function getCurrent(): Cart
    {
        if (request()->user()) {
            $this->connectGuestCartToUser();

            return $this->getByUserId();
        }

        return $this->getByGuestId();
    }

    /**
     * Set guest cart to user / restore user cart if guest cart is empty
     *
     * @throws \Exception
     */
    private function connectGuestCartToUser()
    {
        $guestCart = $this->getByGuestId();
        $userCart = $this->getByUserId();

        if ($guestCart->products()->count() > 0 && $guestCart->user_id === null) {
            $guestCart->user_id = request()->user()->id;
            $guestCart->save();
        } elseif ($userCart->products()->count() > 0 && $guestCart->products()->count() === 0) {
            $guestCart->delete();
            $userCart->session_id = $this->guestIdService->get();
            $userCart->save();
        }
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
     * @param Cart $cart
     * @param string $currency
     * @return float|int
     */
    public function cartTotalCost(Cart $cart, string $currency)
    {
        $products = $cart->products;

        $currencies = $this->currencyService->getCurrencies();

        $resultPrice = 0;

        foreach ($products as $product) {
            $resultPrice += $this->convertCurrency(
                $product->pivot->price * $product->pivot->amount,
                $product->currency,
                $currency,
                $currencies
            );
        }

        return $resultPrice;
    }

    /**
     * @param $price
     * @param string $currencyFrom
     * @param string $currencyTo
     * @param Collection $currencies
     * @return float
     */
    private function convertCurrency($price, string $currencyFrom, string $currencyTo, Collection $currencies): float
    {
        $rateFrom = $currencies->firstWhere('slug', $currencyFrom)->rate ?? 1;
        $rateTo = $currencies->firstWhere('slug', $currencyTo)->rate ?? 1;

        $resultPrice = round($price * ($rateFrom / $rateTo), 2);

        return $resultPrice;

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
