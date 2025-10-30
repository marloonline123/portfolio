<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\FieldsSectionRequest;
use App\Http\Resources\FieldsSectionResource;
use App\Models\FieldsSection;
use App\Services\FileService;
use Illuminate\Http\Request;

class FieldsSectionController extends Controller
{
    public function __construct(protected FileService $fileService) {}
    
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data['fieldsSections'] = FieldsSection::search(request('search'))
            ->orderBy('name')
            ->paginate(10)
            ->withQueryString()
            ->toResourceCollection(FieldsSectionResource::class);

        return inertia('dashboard/fields-sections/index', $data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(FieldsSectionRequest $request)
    {
        $data = $request->validated();

        if ($request->hasFile('icon')) {
            $data['icon_path'] = $this->fileService->storeImage($request->file('icon'), 'fields_sections');
        }
        FieldsSection::create($data);

        return to_route('dashboard.fields-sections.index')
            ->with('success', 'Fields section created successfully.');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(FieldsSectionRequest $request, FieldsSection $fieldsSection)
    {
        $data = $request->validated();

        if ($request->hasFile('icon')) {
            $data['icon_path'] = $this->fileService->storeImage($request->file('icon'), 'fields_sections');
        }
        $fieldsSection->update($data);

        return to_route('dashboard.fields-sections.index')
            ->with('success', 'Fields section updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FieldsSection $fieldsSection)
    {
        $fieldsSection->delete();

        return to_route('dashboard.fields-sections.index')
            ->with('success', 'Fields section deleted successfully.');
    }
}
