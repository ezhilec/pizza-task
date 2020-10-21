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

Route::group(['prefix' => '/v1'], function()
{
    Route::post('/login', 'LoginController@login')
        ->name('api.v1.login');

    Route::post('/login/refresh', 'LoginController@refresh')
        ->name('api.v1.login.refresh');

    Route::post('/login/register', 'LoginController@register')
        ->name('api.v1.register');

    Route::get('products', 'ProductsController@index')
        ->name('api.v1.products.index');

    Route::get('cart', 'CartController@show')
        ->name('api.v1.cart.show');

    Route::put('cart/{product}', 'CartController@update')
        ->name('api.v1.cart.update.product');

    Route::get('currencies', 'CurrencyController@index')
        ->name('api.v1.currencies.index');

    // routes for logged-in
    Route::middleware(['auth:api'])->group(function () {
        Route::post('/logout', 'LoginController@login')
            ->name('api.v1.logout');

        Route::get('user', 'UserController@show')
            ->name('api.v1.user.show');

    });
});


