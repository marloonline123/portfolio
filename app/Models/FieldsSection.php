<?php

namespace App\Models;

use App\Traits\HasActiveScope;
use App\Traits\HasSearchScope;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class FieldsSection extends Model
{
    use HasTranslations, HasActiveScope, HasSearchScope;

    protected $fillable = [
        'name',
        'description',
        'icon_path',
        'is_active',
    ];

    public $translatable = ['name', 'description'];

    protected $casts = [
        'is_active' => 'boolean',
    ];
}
