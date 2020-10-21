<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class ApiRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Show messages as json
     * @param Validator $validator
     */
    protected function failedValidation(Validator $validator){
        throw new HttpResponseException(response()->apiFail($validator->errors()->first(), 422));
    }

}
