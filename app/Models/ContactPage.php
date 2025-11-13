<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class ContactPage extends Model
{
    use HasTranslations;

    protected $table = 'contact_page';
    protected $fillable = ['title', 'subtitle', 'description', 'email', 'phone', 'location'];
    public $translatable = ['title', 'subtitle', 'description'];
}
