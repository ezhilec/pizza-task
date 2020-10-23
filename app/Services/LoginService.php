<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Request;

class LoginService
{

    /**
     * Check valid user
     *
     * @param $email
     * @param $password
     * @return bool
     */
    public function checkLoginUser($email, $password)
    {
        $user = User::where('email', $email)->first();

        if (!$user) {
            return false;
        }

        if (!Hash::check($password, $user->password)) {
            return false;
        }

        return true;
    }

    /**
     * @param $email
     * @param $password
     * @return \Symfony\Component\HttpFoundation\Response
     * @throws \Exception
     */
    public function login($email, $password)
    {
        $client = \DB::table('oauth_clients')
            ->where('password_client', true)
            ->first();

        if (!$client) {
            throw new \Exeption('oauth problem');
        }
        $data = [
            'grant_type' => 'password',
            'client_id' => $client->id,
            'client_secret' => $client->secret,
            'username' => $email,
            'password' => $password,
        ];

        $request = Request::create('/oauth/token', 'POST', $data);

        return app()->handle($request);
    }

    /**
     * Logout user
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        $accessToken = auth()->user()->token();

        if ($accessToken) {
            $refreshToken = \DB::table('oauth_refresh_tokens')
                ->where('access_token_id', $accessToken->id)
                ->update([
                    'revoked' => true
                ]);

            $accessToken->revoke();
        }

        return response()->json(['status' => 200]);
    }

    /**
     * Register new user
     */
    public function registerUser(array $formData)
    {
        $user = User::create([
            'name' => $formData['name'],
            'currency' => $formData['currency'],
            'email' => $formData['email'],
            'phone' => $formData['phone'],
            'password' => bcrypt($formData['password'])
        ]);

        if (!$user) {
            throw new \Exception("Can't create user");
        }

        return $this->login($formData['email'], $formData['password']);
    }
}
