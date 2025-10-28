<?php

namespace App\Models;

use App\Traits\HasSearchScope;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Translatable\HasTranslations;

class Category extends Model
{
    use HasTranslations, SoftDeletes, HasSearchScope;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'is_active',
    ];

    public $translatable = [
        'name',
        'slug',
        'description',
    ];
}
