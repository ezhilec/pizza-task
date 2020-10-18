<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class ProductsController extends BaseController
{
    public function index(Request $request)
    {
        return response()->apiSuccess(['qwe' => 'qsd']);
    }
}
