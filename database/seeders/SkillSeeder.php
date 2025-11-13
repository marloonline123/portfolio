<?php

namespace Database\Seeders;

use App\Models\Skill;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SkillSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $skills = [
            [
                'name' => [
                    'en' => 'Frontend',
                    'ar' => 'الواجهة الأمامية'
                ],
                'item_1' => [
                    'en' => 'HTML5, CSS3, JavaScript',
                    'ar' => 'HTML5، CSS3، JavaScript'
                ],
                'item_2' => [
                    'en' => 'React, Vue, Next.js',
                    'ar' => 'React، Vue، Next.js'
                ],
                'item_3' => [
                    'en' => 'Tailwind CSS',
                    'ar' => 'Tailwind CSS'
                ]
            ],
            [
                'name' => [
                    'en' => 'Backend',
                    'ar' => 'الخادم الخلفي'
                ],
                'item_1' => [
                    'en' => 'PHP, Laravel',
                    'ar' => 'PHP، Laravel'
                ],
                'item_2' => [
                    'en' => 'MySQL',
                    'ar' => 'MySQL'
                ],
                'item_3' => [
                    'en' => 'RESTful APIs',
                    'ar' => 'RESTful APIs'
                ]
            ],
            [
                'name' => [
                    'en' => 'Tools',
                    'ar' => 'الأدوات'
                ],
                'item_1' => [
                    'en' => 'Git, GitHub',
                    'ar' => 'Git، GitHub'
                ],
                'item_2' => [
                    'en' => 'VS Code',
                    'ar' => 'VS Code'
                ],
                'item_3' => [
                    'en' => 'Docker',
                    'ar' => 'Docker'
                ]
            ],
            [
                'name' => [
                    'en' => 'Others',
                    'ar' => 'أخرى'
                ],
                'item_1' => [
                    'en' => 'Inertia.js',
                    'ar' => 'Inertia.js'
                ],
                'item_2' => [
                    'en' => 'Responsive Design',
                    'ar' => 'التصميم المتجاوب'
                ],
                'item_3' => [
                    'en' => 'API Integration',
                    'ar' => 'تكامل API'
                ]
            ]
        ];

        foreach ($skills as $skill) {
            Skill::create($skill);
        }
    }
}
