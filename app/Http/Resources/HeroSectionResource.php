<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class HeroSectionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'role' => $this->role,
            'description' => $this->description,
            'yearsExperience' => $this->years_experience,
            'projectsCount' => $this->projects_count,
            'githubUrl' => $this->github_url,
            'linkedinUrl' => $this->linkedin_url,
            'isActive' => $this->is_active,
            'createdAt' => $this->created_at,
            'updatedAt' => $this->updated_at,
        ];
    }
}
