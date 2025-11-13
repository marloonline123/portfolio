<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Tool;
use Illuminate\Http\Request;

class ToolController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data['tools'] = Tool::search(request('search'))
            ->orderBy('name')
            ->paginate(10)
            ->withQueryString();

        return inertia('dashboard/tools/index', $data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = $request->validate([
            'name.*' => 'required|string|max:255',
        ]);

        Tool::create($validator);

        return to_route('dashboard.tools.index')
            ->with('success', 'Tool created successfully.');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Tool $tool)
    {
        $validator = $request->validate([
            'name.*' => 'required|string|max:255',
        ]);

        $tool->update($validator);

        return to_route('dashboard.tools.index')
            ->with('success', 'Tool updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tool $tool)
    {
        $tool->delete();

        return to_route('dashboard.tools.index')
            ->with('success', 'Tool deleted successfully.');
    }
}
