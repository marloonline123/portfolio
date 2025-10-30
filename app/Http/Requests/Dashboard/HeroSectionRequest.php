<?php

namespace App\Http\Requests\Dashboard;

use Illuminate\Foundation\Http\FormRequest;

class HeroSectionRequest extends FormRequest
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
            'name' => 'required|array',
            'name.en' => 'required|string|max:255',
            'name.ar' => 'required|string|max:255',
            'role' => 'required|array',
            'role.en' => 'required|string|max:255',
            'role.ar' => 'required|string|max:255',
            'description' => 'required|array',
            'description.en' => 'required|string|max:1000',
            'description.ar' => 'required|string|max:1000',
            'years_experience' => 'required|integer|min:0|max:50',
            'projects_count' => 'required|integer|min:0|max:1000',
            'github_url' => 'nullable|url|max:255',
            'linkedin_url' => 'nullable|url|max:255',
            'is_active' => 'boolean',
        ];
    }
}
