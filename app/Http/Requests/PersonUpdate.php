<?php

namespace App\Http\Requests;

use App\Rules\UniqueInCurrentClient;
use Illuminate\Support\Facades\Gate;

class PersonUpdate extends Request
{
    /**
     * @return bool
     */
    public function authorize()
    {
        return Gate::allows('people:modify');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required',
            'title' => 'required',
            'cpf' => ['nullable', 'cpf', new UniqueInCurrentClient('people')],
        ];
    }

    /**
     * @return array
     */
    public function sanitize()
    {
        $input = $this->all();
        if (
            isset($input['name']) &&
            (!isset($input['nickname']) || !$input['nickname'])
        ) {
            $input['nickname'] = $input['name'];
        }
        $this->replace($input);
        return $this->all();
    }
}
