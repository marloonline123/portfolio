<?php

namespace Database\Seeders;

use App\Models\FieldsSection;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FieldsSectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $fieldsSections = [
            [
                'name' => [
                    'en' => 'Frontend Development',
                    'ar' => 'تطوير الواجهة الأمامية'
                ],
                'description' => [
                    'en' => 'Create responsive, intuitive user interfaces with modern frameworks.',
                    'ar' => 'إنشاء واجهات مستخدم متجاوبة وبديهية باستخدام الأطر الحديثة.'
                ],
                'icon_path' => 'Code2',
                'is_active' => true,
            ],
            [
                'name' => [
                    'en' => 'Backend Development',
                    'ar' => 'تطوير الخادم الخلفي'
                ],
                'description' => [
                    'en' => 'Build robust server-side applications and APIs with Laravel.',
                    'ar' => 'بناء تطبيقات خادم قوية وAPIs باستخدام Laravel.'
                ],
                'icon_path' => 'Database',
                'is_active' => true,
            ],
            [
                'name' => [
                    'en' => 'Full-Stack Solutions',
                    'ar' => 'حلول كاملة الوظائف'
                ],
                'description' => [
                    'en' => 'Develop end-to-end applications with seamless frontend and backend integration.',
                    'ar' => 'تطوير تطبيقات شاملة مع تكامل سلس بين الواجهة الأمامية والخلفية.'
                ],
                'icon_path' => 'Layers',
                'is_active' => true,
            ],
            [
                'name' => [
                    'en' => 'System Architecture',
                    'ar' => 'هندسة النظام'
                ],
                'description' => [
                    'en' => 'Design scalable, maintainable application architecture and data models.',
                    'ar' => 'تصميم بنية تطبيق قابلة للتوسع والصيانة ونماذج البيانات.'
                ],
                'icon_path' => 'Settings',
                'is_active' => true,
            ],
            [
                'name' => [
                    'en' => 'UI/UX Implementation',
                    'ar' => 'تنفيذ UI/UX'
                ],
                'description' => [
                    'en' => 'Transform designs into functional, beautiful web interfaces.',
                    'ar' => 'تحويل التصاميم إلى واجهات ويب وظيفية وجميلة.'
                ],
                'icon_path' => 'Palette',
                'is_active' => true,
            ],
            [
                'name' => [
                    'en' => 'Database Design',
                    'ar' => 'تصميم قاعدة البيانات'
                ],
                'description' => [
                    'en' => 'Create efficient database schemas and optimize queries for performance.',
                    'ar' => 'إنشاء مخططات قاعدة بيانات فعالة وتحسين الاستعلامات للأداء.'
                ],
                'icon_path' => 'Database',
                'is_active' => true,
            ],
        ];

        foreach ($fieldsSections as $fieldsSection) {
            FieldsSection::create($fieldsSection);
        }
    }
}
