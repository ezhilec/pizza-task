<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
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

    /**
     * Update user
     *
     * @param UserRequest $request
     * @return \Symfony\Component\HttpFoundation\Response
     * @throws \Exception
     */
    public function update(UserRequest $request)
    {
        $formData = [
            'email' => $request->get('email'),
            'name' => $request->get('name'),
            'surname' => $request->get('surname'),
            'address' => $request->get('address'),
            'phone' => $request->get('phone'),
            'currency' => $request->get('currency'),
            'delivery_type' => $request->get('deliveryType')
        ];

        try {
            return $this->userService->updateUser($formData);
        } catch (\Exeption $e) {
            return response()->apiFail($e->getMessage());
        }
    }

}
