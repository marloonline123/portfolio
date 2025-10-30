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
        $heroSection = HeroSection::active()->first();

        if (!$heroSection) {
            $heroSection = HeroSection::create([
                'name' => ['en' => 'Abotalib Adam', 'ar' => 'أبو طالب آدم'],
                'role' => ['en' => 'Full Stack Developer', 'ar' => 'مطور ويب كامل الوظائف'],
                'description' => [
                    'en' => 'I am a passionate full-stack developer with 2 years of freelance experience creating modern, functional, and user-friendly applications.',
                    'ar' => 'أنا مطور ويب كامل الوظائف شغوف بسنتين من الخبرة في العمل الحر في إنشاء تطبيقات حديثة ووظيفية وسهلة الاستخدام.'
                ],
                'years_experience' => 2,
                'projects_count' => 10,
                'github_url' => 'https://github.com',
                'linkedin_url' => 'https://linkedin.com',
                'is_active' => true,
            ]);
        }

        $data['heroSection'] = new HeroSectionResource($heroSection);

        return inertia('dashboard/hero-sections/edit', $data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(HeroSectionRequest $request, HeroSection $heroSection)
    {
        $heroSection->update($request->validated());

        return to_route('dashboard.hero-sections.index')
            ->with('success', 'Hero section updated successfully.');
    }
}
