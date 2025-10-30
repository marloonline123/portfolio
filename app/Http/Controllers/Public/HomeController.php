<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\AboutSection;
use App\Models\HeroSection;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $heroSection = HeroSection::active()->first();
        $aboutSection = AboutSection::active()->first();

        return Inertia::render('Portfolio', [
            'heroSection' => $heroSection,
            'aboutSection' => $aboutSection,
        ]);
    }
}
