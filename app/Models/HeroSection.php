<?php

namespace App\Models;

use App\Traits\HasActiveScope;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class HeroSection extends Model
{
    use HasTranslations, HasActiveScope;

    protected $fillable = [
        'name',
        'role',
        'description',
        'years_experience',
        'projects_count',
        'github_url',
        'linkedin_url',
        'is_active',
    ];

    public $translatable = ['name', 'role', 'description'];

    protected $casts = [
        'is_active' => 'boolean',
        'years_experience' => 'integer',
        'projects_count' => 'integer',
    ];
}
