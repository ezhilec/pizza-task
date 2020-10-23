<?php

namespace App\Services;

use App\Models\Cart;
use App\Models\Order;
use App\Models\User;

class OrderService
{
    private $deliveryService;

    private $currencyService;

    private $cartService;

    public function __construct(
        DeliveryService $deliveryService,
        CurrencyService $currencyService,
        CartService $cartService
    )
    {
        $this->deliveryService = $deliveryService;
        $this->currencyService = $currencyService;
        $this->cartService = $cartService;
    }

    /**
     * Get user orders
     */
    public function getUserOrders()
    {
        $user = request()->user();

        $orders = $user->orders;

        return $orders;
    }

    /**
     * Add new order
     */
    public function addOrder(array $formData, Cart $cart, ?User $user = null)
    {
        $deliveryType = $this->deliveryService->getBySlug($formData['deliveryType']);

        $totalCost = $this->cartService->cartTotalCost($cart, $formData['currency']);

        $order = Order::create([
            'user_id' => $user ? $user->id : null,
            'delivery_type' => $formData['deliveryType'],
            'delivery_cost' => $deliveryType ? $deliveryType->cost : 0,
            'name' => $formData['name'],
            'surname' => $formData['surname'],
            'currency' => $formData['currency'],
            'email' => $formData['email'],
            'phone' => $formData['phone'],
            'address' => $formData['address'],
            'cart_id' => $cart->id,
            'total_cost' => $totalCost
        ]);

        if (!$order) {
            throw new \Exception("Can't create order");
        }

        return $order;
    }
}
