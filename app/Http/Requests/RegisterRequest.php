<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class RegisterRequest extends ApiRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'phone' => 'required|regex:/^([0-9\s\-\+\(\)]*)$/|min:10',
            'currency' => 'required',
            'password' => 'required|min:6|confirmed'
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'name.required' => 'Name is required',
            'email.required' => 'Email is required',
            'email.email' => 'Email must be in format user@test.com',
            'email.unique' => 'Email is busy',
            'phone.required' => 'Phone is required',
            'phone.min' => 'Phone must be at least 10 characters long',
            'phone.regex' => 'Phone must be in format +71112223344',
            'password.required' => 'Password is required',
            'password.min' => 'Password must be at least 6 characters long',
            'password.confirmed' => 'Password must be confirmed',
            'currency.required' => 'Currency is required'
        ];
    }
}
