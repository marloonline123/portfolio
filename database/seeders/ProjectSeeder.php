<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $projects = [
            [
                'title' => [
                    'en' => 'Bouh Marketing Website',
                    'ar' => 'موقع بوه للتسويق'
                ],
                'slug' => [
                    'en' => 'bouh-marketing-website',
                    'ar' => 'موقع-بوه-للتسويق'
                ],
                'category_id' => 1,
                'description' => [
                    'en' => 'Marketing automation platform for feasibility studies, marketing plans, and research.',
                    'ar' => 'منصة أتمتة التسويق لدراسات الجدوى والخطط التسويقية والبحث.'
                ],
                'image_path' => 'https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                'technologies' => ['Laravel', 'Vue.js', 'Tailwind CSS', 'MySQL'],
                'live_url' => 'https://example.com/bouh-marketing',
                'github_url' => 'https://github.com/bouh-marketing',
                'is_active' => true,
            ],
            [
                'title' => [
                    'en' => 'Nadara POS & Inventory',
                    'ar' => 'نظام نقاط البيع والمخزون نادرة'
                ],
                'slug' => [
                    'en' => 'nadara-pos-inventory',
                    'ar' => 'نظام-نادرة-لنقاط-البيع-والمخزون'
                ],
                'category_id' => 1,
                'description' => [
                    'en' => 'Complete point of sale system with invoicing, stock management via CSV, and WhatsApp integration.',
                    'ar' => 'نظام نقاط بيع متكامل مع الفواتير وإدارة المخزون عبر CSV وتكامل واتساب.'
                ],
                'image_path' => 'https://images.pexels.com/photos/8867429/pexels-photo-8867429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                'technologies' => ['Laravel', 'Inertia.js', 'React', 'MySQL'],
                'live_url' => 'https://example.com/nadara-pos',
                'is_active' => true,
            ],
            [
                'title' => [
                    'en' => 'Full Social Media App',
                    'ar' => 'تطبيق تواصل اجتماعي كامل'
                ],
                'slug' => [
                    'en' => 'full-social-media-app',
                    'ar' => 'تطبيق-تواصل-اجتماعي-كامل'
                ],
                'category_id' => 1,
                'description' => [
                    'en' => 'Social platform with post creation, GPT content generation, and real-time notifications.',
                    'ar' => 'منصة اجتماعية مع إنشاء المنشورات وتوليد المحتوى بواسطة GPT وإشعارات في الوقت الفعلي.'
                ],
                'image_path' => 'https://images.pexels.com/photos/5967861/pexels-photo-5967861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                'technologies' => ['Laravel', 'Vue.js', 'Pusher', 'Tailwind CSS'],
                'live_url' => 'https://example.com/social-app',
                'is_active' => true,
            ],
            [
                'title' => [
                    'en' => 'E-commerce Dashboard',
                    'ar' => 'لوحة تحكم التجارة الإلكترونية'
                ],
                'slug' => [
                    'en' => 'e-commerce-dashboard',
                    'ar' => 'لوحة-تحكم-التجارة-الإلكترونية'
                ],
                'category_id' => 1,
                'description' => [
                    'en' => 'Admin dashboard for managing products, orders, customers, and analytics.',
                    'ar' => 'لوحة تحكم إدارية لإدارة المنتجات والطلبات والعملاء والتحليلات.'
                ],
                'image_path' => 'https://images.pexels.com/photos/6804604/pexels-photo-6804604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                'technologies' => ['React', 'Next.js', 'Tailwind CSS', 'MySQL'],
                'live_url' => 'https://example.com/ecommerce-dashboard',
                'is_active' => true,
            ],
            [
                'title' => [
                    'en' => 'Meal Planner App',
                    'ar' => 'تطبيق مخطط الوجبات'
                ],
                'slug' => [
                    'en' => 'meal-planner-app',
                    'ar' => 'تطبيق-مخطط-الوجبات'
                ],
                'category_id' => 2, // Mobile Development
                'description' => [
                    'en' => 'Mobile application for planning weekly meals with grocery list integration.',
                    'ar' => 'تطبيق جوال لتخطيط الوجبات الأسبوعية مع تكامل قائمة البقالة.'
                ],
                'image_path' => 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                'technologies' => ['React Native', 'Firebase', 'Redux'],
                'live_url' => 'https://example.com/meal-planner',
                'github_url' => 'https://github.com/example/meal-planner',
                'is_active' => true,
            ],
            [
                'title' => [
                    'en' => 'Task Management Platform',
                    'ar' => 'منصة إدارة المهام'
                ],
                'slug' => [
                    'en' => 'task-management-platform',
                    'ar' => 'منصة-إدارة-المهام'
                ],
                'category_id' => 1,
                'description' => [
                    'en' => 'Project management system with task assignments, due dates, and progress tracking.',
                    'ar' => 'نظام إدارة المشاريع مع تعيين المهام وتواريخ الاستحقاق وتتبع التقدم.'
                ],
                'image_path' => 'https://images.pexels.com/photos/5717479/pexels-photo-5717479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                'technologies' => ['Laravel', 'React', 'MySQL', 'Tailwind CSS'],
                'live_url' => 'https://example.com/task-manager',
                'is_active' => true,
            ],
        ];

        foreach ($projects as $project) {
            Project::create($project);
        }
    }
}
