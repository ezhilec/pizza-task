<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::group(array('prefix' => '/v1'), function()
{
    Route::get('products', 'ProductsController@index')
        ->name('api.v1.products.index');

    Route::get('cart', 'CartController@show')
        ->name('api.v1.cart.show');

    Route::put('cart/{product}', 'CartController@update')
        ->name('api.v1.cart.update.product');
});


