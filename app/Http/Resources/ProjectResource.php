<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
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
            'title' => $this->getTranslations('title'),
            'slug' => $this->getTranslations('slug'),
            'description' => $this->getTranslations('description'),
            'category' => $this->category,
            'imagePath' => $this->image_path ? asset('storage/' . $this->image_path) : null,
            'technologies' => $this->technologies,
            'liveUrl' => $this->live_url,
            'githubUrl' => $this->github_url,
            'isActive' => $this->is_active,
            'createdAt' => $this->created_at,
            'updatedAt' => $this->updated_at,
        ];
    }
}