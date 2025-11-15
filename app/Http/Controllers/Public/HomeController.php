<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Http\Resources\FieldsSectionResource;
use App\Http\Resources\ProjectResource;
use App\Models\AboutSection;
use App\Models\Category;
use App\Models\FieldsSection;
use App\Models\HeroSection;
use App\Models\Project;
use App\Models\Skill;
use App\Models\Tool;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $heroSection = HeroSection::active()->first();
        $aboutSection = AboutSection::active()->first();
        $fieldsSections = FieldsSectionResource::collection(FieldsSection::active()->get());
        $tools = Tool::all();
        $skills = Skill::all();
        $categories = Category::active()->get();

        // Get projects for home page: 2 from each category, limited to 6 total
        $projects = collect();
        foreach ($categories as $category) {
            $categoryProjects = Project::with('category')
                ->active()
                ->where('category_id', $category->id)
                ->limit(6)
                ->get();

            $projects = $projects->merge($categoryProjects);
        }

        $projects = ProjectResource::collection($projects);

        return Inertia::render('public/home', [
            'heroSection' => $heroSection,
            'aboutSection' => $aboutSection,
            'fieldsSections' => $fieldsSections,
            'tools' => $tools,
            'skills' => $skills,
            'projects' => $projects,
            'categories' => $categories,
        ]);
    }
}
