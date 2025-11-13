<?php

namespace App\Models;

use App\Traits\HasSearchScope;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Tool extends Model
{
    use HasSearchScope, HasTranslations;

    protected $fillable = ['name'];

    public $timestamps = false;

    public array $translatable = ['name'];
}
