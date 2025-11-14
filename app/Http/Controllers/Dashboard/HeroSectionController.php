<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\BaseController;
use App\Http\Requests\Dashboard\HeroSectionRequest;
use App\Http\Resources\HeroSectionResource;
use App\Models\HeroSection;

class HeroSectionController extends BaseController
{
    

    /**
     * Show the form for editing the specified resource.
     */
    public function edit()
    {
        $data['heroSection'] = HeroSection::active()->first()->toResource()->resolve();

        return inertia('dashboard/hero-sections/edit', $data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(HeroSectionRequest $request)
    {
        $heroSection = HeroSection::active()->first();

        if ($heroSection) {
            $heroSection->update($request->validated());
        } else {
            HeroSection::create(array_merge($request->validated(), ['is_active' => true]));
        }

        return to_route('dashboard.hero-sections.edit')
            ->with('success', 'Hero section updated successfully.');
    }
}
