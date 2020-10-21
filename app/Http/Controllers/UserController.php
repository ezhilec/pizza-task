<?php

namespace App\Http\Controllers;

use App\Services\UserService;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class UserController extends BaseController
{
    private $userService;

    public function __construct(
        UserService $userService
    )
    {
        $this->userService = $userService;
    }

    /**
     * Show user json
     *
     * @param Request $request
     * @return mixed
     */
    public function show(Request $request)
    {
        try {
            $user = $this->userService->getCurrent();

            return response()->apiSuccess($user);
        } catch (\Exeption $e) {
            return response()->apiFail($e->getMessage());
        }
    }
}
