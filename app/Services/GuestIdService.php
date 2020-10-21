<?php

namespace App\Services;

use App\Models\Product;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Str;

class GuestIdService
{

    /**
     * Check if cookie isset
     *
     * @param $request
     * @return mixed
     */
    public function check()
    {
        return Cookie::has('guestId');
    }

    /**
     * Generate cookie
     *
     */
    public function makeCookie()
    {
        $guestId = Str::uuid()->toString();

        Cookie::queue(Cookie::forever('guestId', $guestId));
    }

    /**
     * Get cookie value
     *
     * @return string|null
     */
    public function get()
    {
        $guestId = Cookie::get('guestId');

        return $guestId;
    }

    /**
     * Delete cookie
     *
     * @return \Symfony\Component\HttpFoundation\Cookie
     */
    public function delete()
    {
        return Cookie::forget('guestId');
    }
}
