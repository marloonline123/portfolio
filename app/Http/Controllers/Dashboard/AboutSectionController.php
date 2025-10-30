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
        $aboutSection = AboutSection::active()->first();

        if (!$aboutSection) {
            $aboutSection = AboutSection::create([
                'title' => ['en' => 'About Me', 'ar' => 'نبذة عني'],
                'subtitle' => [
                    'en' => 'I\'m a passionate full-stack developer with 2 years of freelance experience creating modern, functional, and user-friendly applications.',
                    'ar' => 'أنا مطور ويب كامل الوظائف شغوف بسنتين من الخبرة في العمل الحر في إنشاء تطبيقات حديثة ووظيفية وسهلة الاستخدام.'
                ],
                'journey_description' => [
                    'en' => 'Over the past 2 years, I\'ve worked as a freelance developer building various applications ranging from marketing websites to complex inventory systems. My approach focuses on creating clean, efficient code that delivers exceptional user experiences.',
                    'ar' => 'خلال السنتين الماضيتين، عملت كمطور مستقل في بناء تطبيقات متنوعة تتراوح من مواقع التسويق إلى أنظمة المخزون المعقدة. يركز نهجي على إنشاء كود نظيف وفعال يوفر تجارب مستخدم استثنائية.'
                ],
                'specialization_description' => [
                    'en' => 'I specialize in both frontend and backend development, with particular expertise in React, Vue, Laravel, and Next.js. I\'m passionate about staying up-to-date with the latest technologies and best practices in the industry.',
                    'ar' => 'أتخصص في التطوير الأمامي والخلفي، مع خبرة خاصة في React وVue وLaravel وNext.js. أنا شغوف بالبقاء على اطلاع بأحدث التقنيات وأفضل الممارسات في الصناعة.'
                ],
                'is_active' => true,
            ]);
        }

        $data['aboutSection'] = new AboutSectionResource($aboutSection);

        return inertia('dashboard/about-sections/edit', $data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(AboutSectionRequest $request, AboutSection $aboutSection)
    {
        $aboutSection->update($request->validated());

        return to_route('dashboard.about-sections.index')
            ->with('success', 'About section updated successfully.');
    }

}
