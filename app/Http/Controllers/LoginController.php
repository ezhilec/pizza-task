<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\UserRequest;
use App\Services\LoginService;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class LoginController extends BaseController
{
    private $loginService;

    public function __construct(
        LoginService $loginService
    )
    {
        $this->loginService = $loginService;
    }

    /**
     * User login
     *
     * @param LoginRequest $request
     * @return \Symfony\Component\HttpFoundation\Response
     * @throws \Exception
     */
    public function login(LoginRequest $request)
    {
        $email = $request->get('email');
        $password = $request->get('password');

        if (!$this->loginService->checkLoginUser($email, $password)) {
            return response()->apiFail('Wrong email or password');
        }

        try {
            return $this->loginService->login($email, $password);

        } catch (\Exeption $e) {
            return response()->apiFail($e->getMessage());
        }
    }

    /**
     * User register
     *
     * @param UserRequest $request
     * @return \Symfony\Component\HttpFoundation\Response
     * @throws \Exception
     */
    public function register(RegisterRequest $request)
    {
        $formData = [
            'email' => $request->get('email'),
            'password' => $request->get('password'),
            'name' => $request->get('name'),
            'phone' => $request->get('phone'),
            'currency' => $request->get('currency')
        ];

        try {
            return $this->loginService->registerUser($formData);
        } catch (\Exeption $e) {
            return response()->apiFail($e->getMessage());
        }
    }

    /**
     * User login token refresh
     *
     * @param Request $request
     * @return mixed
     */
    public function refresh(Request $request)
    {
        try {
            $newToken = $this->loginService->refresh();

            return response()->apiSuccess($newToken);
        } catch (\Exeption $e) {
            return response()->apiFail($e->getMessage());
        }
    }

    /**
     * User logout
     *
     * @param Request $request
     * @return mixed
     */
    public function logout(Request $request)
    {
        try {
            $cart = $this->loginService->logout();

            return response()->apiSuccess();
        } catch (\Exeption $e) {
            return response()->apiFail($e->getMessage());
        }
    }
}
