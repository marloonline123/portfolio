<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\BaseController;
use App\Http\Requests\Dashboard\ProjectRequest;
use App\Http\Resources\ProjectResource;
use App\Models\Project;
use App\Services\FileService;

class ProjectController extends BaseController
{
    public function __construct(protected FileService $fileService) {}

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data['projects'] = Project::with('category')
            ->search(request('search'))
            ->latest()
            ->paginate(10)
            ->withQueryString()
            ->toResourceCollection(ProjectResource::class);

        return inertia('dashboard/projects/index', $data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $data['categories'] = \App\Models\Category::all();

        return inertia('dashboard/projects/create', $data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProjectRequest $request)
    {
        $data = $request->validated();
        if ($request->hasFile('image')) {
            $data['image_path'] = $this->fileService->storeImage($request->file('image'), 'projects/thumbnails');
        }
        Project::create($data);

        return to_route('dashboard.projects.index')
            ->with('success', 'Project created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        $data['project'] = new ProjectResource($project->load('category'));

        return inertia('dashboard/projects/show', $data);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {
        $data['project'] = new ProjectResource($project->load('category'));
        $data['categories'] = \App\Models\Category::all();

        return inertia('dashboard/projects/edit', $data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ProjectRequest $request, Project $project)
    {
        $data = $request->validated();
        if ($request->hasFile('image')) {
            $data['image_path'] = $this->fileService->storeImage($request->file('image'), 'projects/thumbnails');
        }
        $project->update($data);

        return to_route('dashboard.projects.index')
            ->with('success', 'Project updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        $project->delete();

        return to_route('dashboard.projects.index')
            ->with('success', 'Project deleted successfully.');
    }
}