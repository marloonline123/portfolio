<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\BaseController;
use App\Http\Requests\Dashboard\AboutSectionRequest;
use App\Http\Resources\AboutSectionResource;
use App\Models\AboutSection;

class AboutSectionController extends BaseController
{
    /**
     * Display the about section for editing.
     */
    public function edit()
    {
        $data['aboutSection'] = AboutSection::active()->first();

        return inertia('dashboard/about-sections/edit', $data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(AboutSectionRequest $request)
    {
        $aboutSection = AboutSection::active()->first();

        if ($aboutSection) {
            $aboutSection->update($request->validated());
        } else {
            AboutSection::create(array_merge($request->validated(), ['is_active' => true]));
        }

        return to_route('dashboard.about-sections.edit')
            ->with('success', 'About section updated successfully.');
    }

}
