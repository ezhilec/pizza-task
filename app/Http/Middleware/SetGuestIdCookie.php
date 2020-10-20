<?php

namespace App\Http\Middleware;

use App\Services\GuestIdService;
use Closure;
use Illuminate\Foundation\Http\Middleware\TrimStrings as Middleware;


class SetGuestIdCookie extends Middleware
{
    private $guestIdService;

    public function __construct(
        GuestIdService $guestIdService
    )
    {
        $this->guestIdService = $guestIdService;
    }

    /**
     * Set guest id cookie if it not exist
     *
     * @param \Illuminate\Http\Request $request
     * @param Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if ($this->guestIdService->check()) {
            return $next($request);
        }

        $this->guestIdService->makeCookie();
        //$response = $next($request);
        //$response->withCookie($this->guestIdService->make());

        return $next($request);
    }
}
