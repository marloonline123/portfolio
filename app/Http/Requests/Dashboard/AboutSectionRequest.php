<?php

namespace App\Http\Requests\Dashboard;

use Illuminate\Foundation\Http\FormRequest;

class AboutSectionRequest extends FormRequest
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
            'title' => 'required|array',
            'title.en' => 'required|string|max:255',
            'title.ar' => 'required|string|max:255',
            'subtitle' => 'required|array',
            'subtitle.en' => 'required|string|max:500',
            'subtitle.ar' => 'required|string|max:500',
            'journey_description' => 'required|array',
            'journey_description.en' => 'required|string|max:1000',
            'journey_description.ar' => 'required|string|max:1000',
            'specialization_description' => 'required|array',
            'specialization_description.en' => 'required|string|max:1000',
            'specialization_description.ar' => 'required|string|max:1000',
            'is_active' => 'boolean',
        ];
    }
}
