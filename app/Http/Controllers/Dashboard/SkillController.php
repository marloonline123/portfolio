<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
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
    public function store(Request $request)
    {
        $validator = $request->validate([
            'name' => 'required|string|max:255|unique:skills,name',
        ]);

        Skill::create($validator);

        return to_route('dashboard.skills.index')
            ->with('success', 'Skill created successfully.');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Skill $skill)
    {
        $validator = $request->validate([
            'name' => 'required|string|max:255|unique:skills,name,' . $skill->id,
        ]);

        $skill->update($validator);

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
