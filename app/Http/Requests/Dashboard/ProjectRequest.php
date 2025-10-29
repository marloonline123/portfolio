<?php

namespace App\Http\Requests\Dashboard;

use Illuminate\Foundation\Http\FormRequest;

class ProjectRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'category_id' => 'required|exists:categories,id',
            'title.*' => 'required|string|max:255',
            'slug.*' => 'required|string|max:255',
            'description.*' => 'required|string',
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
            'technologies' => 'required|array',
            'technologies.*' => 'string',
            'live_url' => 'nullable|url',
            'github_url' => 'nullable|url',
            'is_active' => 'sometimes|boolean',
        ];
    }
}