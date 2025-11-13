<?php

namespace App\Models;

use App\Traits\HasSearchScope;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Skill extends Model
{
    use HasSearchScope, HasTranslations;

    protected $fillable = ['name', 'item_1', 'item_2', 'item_3'];

    public array $translatable = ['name', 'item_1', 'item_2', 'item_3'];
    
    public $timestamps = false;
}
