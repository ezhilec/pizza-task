<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrderRequest;
use App\Services\CartService;
use App\Services\OrderService;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class OrdersController extends BaseController
{
    private $orderService;

    private $cartService;

    public function __construct(
        OrderService $orderService,
        CartService $cartService
    )
    {
        $this->orderService = $orderService;
        $this->cartService = $cartService;
    }

    /**
     * Show user orders
     *
     * @param Request $request
     * @return mixed
     */
    public function index(Request $request)
    {
        try {
            $orders = $this->orderService->getUserOrders();

            return response()->apiSuccess($orders);
        } catch (\Exeption $e) {
            return response()->apiFail($e->getMessage());
        }
    }

    /**
     * Add order
     *
     * @param OrderRequest $request
     * @return \Symfony\Component\HttpFoundation\Response
     * @throws \Exception
     */
    public function store(OrderRequest $request)
    {
        $formData = [
            'email' => $request->get('email'),
            'name' => $request->get('name'),
            'surname' => $request->get('surname'),
            'address' => $request->get('address'),
            'phone' => $request->get('phone'),
            'currency' => $request->get('currency'),
            'deliveryType' => $request->get('deliveryType')
        ];

        try {
            $cart = $this->cartService->getCurrent();
            $user = $request->user();

            $order = $this->orderService->addOrder($formData, $cart, $user);

            return response()->apiSuccess($order);
        } catch (\Exeption $e) {
            return response()->apiFail($e->getMessage());
        }
    }

}
