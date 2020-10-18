<?php

namespace App\Providers;

use Illuminate\Support\Facades\Request;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Response;

class ResponseMacroServiceProvider extends ServiceProvider
{
    public function boot()
    {
        Response::macro('apiSuccess', function ($data) {
            return Response::json([
                'status' => 'ok',
                'data' => $data,
            ]);
        });

        Response::macro('apiFail', function ($data) {
            return Response::json([
                'status' => 'error',
                'error' => $data,
            ]);
        });
    }
}
