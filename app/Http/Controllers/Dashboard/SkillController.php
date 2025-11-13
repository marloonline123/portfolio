<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\SkillRequest;
use App\Models\Skill;
use Illuminate\Http\Request;

class SkillController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data['skills'] = Skill::search(request('search'))
            ->orderBy('name')
            ->paginate(10)
            ->withQueryString();

        return inertia('dashboard/skills/index', $data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(SkillRequest $request)
    {
        $data = $request->validated();

        Skill::create($data);

        return to_route('dashboard.skills.index')
            ->with('success', 'Skill created successfully.');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(SkillRequest $request, Skill $skill)
    {
        $data = $request->validated();

        $skill->update($data);

        return to_route('dashboard.skills.index')
            ->with('success', 'Skill updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Skill $skill)
    {
        $skill->delete();

        return to_route('dashboard.skills.index')
            ->with('success', 'Skill deleted successfully.');
    }
}