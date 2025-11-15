<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProjectResource;
use App\Models\Category;
use App\Models\Project;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::with('category')
            ->active()
            ->search(request('search'), ['title', 'description'])
            ->when(request('category'), function ($query) {
                return $query->where('category_id', request('category'));
            })
            ->paginate(12);

        $categories = Category::active()->get();

        return Inertia::render('public/projects/index', [
            'projects' => ProjectResource::collection($projects),
            'categories' => $categories,
            'filters' => request()->only(['search', 'category']),
        ]);
    }

    public function show($slug)
    {
        $project = Project::with('category')
            ->active()
            ->where("slug->" . app()->getLocale(), $slug)
            ->firstOrFail()
            ->toResource()
            ->resolve();

        return Inertia::render('public/projects/show', [
            'project' => $project,
        ]);
    }
}