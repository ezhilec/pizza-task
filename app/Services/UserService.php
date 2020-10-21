<?php

namespace App\Services;

class UserService
{
    /**
     * Get products list
     */
    public function getCurrent()
    {
        return auth()->user();
    }
}
