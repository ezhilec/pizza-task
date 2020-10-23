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

Route::group(['prefix' => '/v1'], function()
{
    Route::post('/login', 'LoginController@login')
        ->name('api.v1.login');

    Route::post('/login/refresh', 'LoginController@refresh')
        ->name('api.v1.login.refresh');

    Route::post('/register', 'LoginController@register')
        ->name('api.v1.register');

    Route::get('/products', 'ProductsController@index')
        ->name('api.v1.products.index');

    Route::get('/cart', 'CartController@show')
        ->name('api.v1.cart.show');

    Route::put('/cart/{product}', 'CartController@update')
        ->name('api.v1.cart.update.product');

    Route::get('/currencies', 'CurrenciesController@index')
        ->name('api.v1.currencies.index');

    Route::get('/delivery_types', 'DeliveryTypesController@index')
        ->name('api.v1.deliveryTypes.index');

    Route::post('/orders', 'OrdersController@store')
        ->name('api.v1.add.order');

    // routes for logged-in
    Route::middleware(['auth:api'])->group(function () {
        Route::post('/logout', 'LoginController@logout')
            ->name('api.v1.logout');

        Route::get('/user', 'UserController@show')
            ->name('api.v1.user.show');

        Route::put('/user', 'UserController@update')
            ->name('api.v1.user.show');

        Route::get('/orders', 'OrdersController@index')
            ->name('api.v1.orders.show');
    });
});


