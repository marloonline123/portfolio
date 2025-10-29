<?php

namespace App\Models;

use App\Traits\HasActiveScope;
use App\Traits\HasSearchScope;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Project extends Model
{
    use HasSearchScope, HasTranslations, HasActiveScope;

    protected $fillable = [
        'title',
        'slug',
        'category_id',
        'description',
        'image_path',
        'technologies',
        'live_url',
        'github_url',
        'is_active',
    ];

    public $translatable = ['title', 'slug', 'description'];

    protected $casts = [
        'is_active' => 'boolean',
        'technologies' => 'array',
    ];

    public function getRouteKeyName()
    {
        return 'slug';
    }

    // custom route binding logic because slug is stored as json
    public function resolveRouteBinding($value, $field = null)
    {
        // detect app locale
        $locale = app()->getLocale() ?? 'en';

        return $this->where("slug->$locale", $value)->firstOrFail();
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
