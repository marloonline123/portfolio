<?php

namespace App\Models;

use App\Traits\HasSearchScope;
use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    use HasSearchScope;

    protected $fillable = ['name'];

    public $timestamps = false;
}
