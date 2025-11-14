<?php

namespace Database\Seeders;

use App\Models\HeroSection;
use Illuminate\Database\Seeder;

class HeroSectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        HeroSection::create([
            'name' => [
                'en' => 'John Doe',
                'ar' => 'احمد محمد'
            ],
            'role' => [
                'en' => 'Full Stack Developer',
                'ar' => 'مطور ويب كامل الوظائف'
            ],
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
}