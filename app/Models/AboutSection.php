<?php

namespace App\Models;

use App\Traits\HasActiveScope;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class AboutSection extends Model
{
    use HasTranslations, HasActiveScope;

    protected $fillable = [
        'title',
        'subtitle',
        'journey_description',
        'specialization_description',
        'is_active',
    ];

    public $translatable = ['title', 'subtitle', 'journey_description', 'specialization_description'];

    protected $casts = [
        'is_active' => 'boolean',
    ];
}
