<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\AboutSection;
use App\Models\HeroSection;
use App\Models\Skill;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $heroSection = HeroSection::active()->first();
        $aboutSection = AboutSection::active()->first();
        $skills = Skill::all();

        return Inertia::render('public/home', [
            'heroSection' => $heroSection,
            'aboutSection' => $aboutSection,
            'skills' => $skills,
        ]);
    }
}
