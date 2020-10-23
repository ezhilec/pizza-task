<?php

namespace App\Http\Controllers;

use App\Services\DeliveryService;
use App\Services\ProductsService;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class DeliveryTypesController extends BaseController
{
    private $deliveryService;

    public function __construct(
        DeliveryService $deliveryService
    )
    {
        $this->deliveryService = $deliveryService;
    }


    /**
     * Get json list of delivery methods
     *
     * @param Request $request
     * @return mixed
     */
    public function index(Request $request)
    {
        try {
            $types = $this->deliveryService->getTypes();

            return response()->apiSuccess($types);
        } catch (\Exeption $e) {
            return response()->apiFail($e->getMessage());
        }
    }
}
