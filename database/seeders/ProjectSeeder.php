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
                    'en' => 'NutriTrack Health App',
                    'ar' => 'تطبيق نوتري تراك الصحي'
                ],
                'slug' => [
                    'en' => 'nutritrack-health-app',
                    'ar' => 'تطبيق-نوتري-تراك-الصحي'
                ],
                'category_id' => 1,
                'description' => [
                    'en' => 'A mobile app for tracking calories, meals, and personalized health goals.',
                    'ar' => 'تطبيق جوال لتتبع السعرات والوجبات والأهداف الصحية المخصصة.'
                ],
                'image_path' => 'https://images.pexels.com/photos/3769999/pexels-photo-3769999.jpeg',
                'technologies' => ['React Native', 'Node.js', 'PostgreSQL'],
                'live_url' => 'https://example.com/nutritrack',
                'github_url' => 'https://github.com/nutritrack',
                'is_active' => true,
            ],

            [
                'title' => [
                    'en' => 'EduMaster LMS Platform',
                    'ar' => 'منصة التعليم إديو ماستر'
                ],
                'slug' => [
                    'en' => 'edumaster-lms-platform',
                    'ar' => 'منصة-إديو-ماستر'
                ],
                'category_id' => 2,
                'description' => [
                    'en' => 'Learning management system offering courses, exams, and certification.',
                    'ar' => 'نظام إدارة تعليم يقدم دورات واختبارات وشهادات.'
                ],
                'image_path' => 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
                'technologies' => ['Laravel', 'Inertia.js', 'Vue.js', 'MySQL'],
                'live_url' => 'https://example.com/edumaster',
                'github_url' => 'https://github.com/edumaster',
                'is_active' => true,
            ],

            [
                'title' => [
                    'en' => 'Shopster E-Commerce System',
                    'ar' => 'متجر شوبستر الإلكتروني'
                ],
                'slug' => [
                    'en' => 'shopster-ecommerce-system',
                    'ar' => 'نظام-شوبستر-للتجارة-الإلكترونية'
                ],
                'category_id' => 3,
                'description' => [
                    'en' => 'E-commerce system with inventory control, payments, and delivery tracking.',
                    'ar' => 'نظام تجارة إلكترونية مع إدارة مخزون، مدفوعات، وتتبع الشحن.'
                ],
                'image_path' => 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg',
                'technologies' => ['Next.js', 'NestJS', 'Stripe', 'MongoDB'],
                'live_url' => 'https://example.com/shopster',
                'github_url' => 'https://github.com/shopster',
                'is_active' => true,
            ],

            [
                'title' => [
                    'en' => 'FleetGo Delivery System',
                    'ar' => 'نظام فليت جو للتوصيل'
                ],
                'slug' => [
                    'en' => 'fleetgo-delivery-system',
                    'ar' => 'نظام-فليت-جو'
                ],
                'category_id' => 3,
                'description' => [
                    'en' => 'Delivery and logistics platform with live driver tracking and route optimization.',
                    'ar' => 'منصة توصيل ولوجستيات مع تتبع مباشر للسائق وتحسين المسارات.'
                ],
                'image_path' => 'https://images.pexels.com/photos/6169055/pexels-photo-6169055.jpeg',
                'technologies' => ['Flutter', 'Fastify', 'Redis', 'PostgreSQL'],
                'live_url' => 'https://example.com/fleetgo',
                'github_url' => 'https://github.com/fleetgo',
                'is_active' => true,
            ],

            [
                'title' => [
                    'en' => 'ClinicPro Management System',
                    'ar' => 'نظام إدارة كلينك برو'
                ],
                'slug' => [
                    'en' => 'clinicpro-management-system',
                    'ar' => 'نظام-كلينك-برو'
                ],
                'category_id' => 1,
                'description' => [
                    'en' => 'A clinic management solution for appointments, records, and patient histories.',
                    'ar' => 'نظام لإدارة العيادات يشمل المواعيد والسجلات وتاريخ المرضى.'
                ],
                'image_path' => 'https://images.pexels.com/photos/6129042/pexels-photo-6129042.jpeg',
                'technologies' => ['Laravel', 'Livewire', 'MySQL'],
                'live_url' => 'https://example.com/clinicpro',
                'github_url' => 'https://github.com/clinicpro',
                'is_active' => true,
            ],

            [
                'title' => [
                    'en' => 'TaskFlow Project Manager',
                    'ar' => 'مدير المشاريع تاسك فلو'
                ],
                'slug' => [
                    'en' => 'taskflow-project-manager',
                    'ar' => 'مدير-المشاريع-تاسك-فلو'
                ],
                'category_id' => 2,
                'description' => [
                    'en' => 'Project management tool with kanban boards and real-time collaboration.',
                    'ar' => 'أداة لإدارة المشاريع مع لوحات كانبان وتعاون فوري.'
                ],
                'image_path' => 'https://images.pexels.com/photos/6476584/pexels-photo-6476584.jpeg',
                'technologies' => ['Vue.js', 'Node.js', 'Socket.io', 'PostgreSQL'],
                'live_url' => 'https://example.com/taskflow',
                'github_url' => 'https://github.com/taskflow',
                'is_active' => true,
            ],

            [
                'title' => [
                    'en' => 'Foodiez Restaurant POS',
                    'ar' => 'نظام فوديـز لمطاعم'
                ],
                'slug' => [
                    'en' => 'foodiez-restaurant-pos',
                    'ar' => 'نظام-فوديز-pos'
                ],
                'category_id' => 3,
                'description' => [
                    'en' => 'Restaurant POS with orders, kitchen display, and inventory sync.',
                    'ar' => 'نظام نقاط بيع للمطاعم يشمل الطلبات، شاشة المطبخ، ومزامنة المخزون.'
                ],
                'image_path' => 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg',
                'technologies' => ['React.js', 'Laravel', 'MySQL'],
                'live_url' => 'https://example.com/foodiez',
                'github_url' => 'https://github.com/foodiez',
                'is_active' => true,
            ],

            [
                'title' => [
                    'en' => 'HRCore HR System',
                    'ar' => 'نظام الموارد البشرية إتش آر كور'
                ],
                'slug' => [
                    'en' => 'hrcore-hr-system',
                    'ar' => 'نظام-إتش-آر-كور'
                ],
                'category_id' => 2,
                'description' => [
                    'en' => 'Human resources platform for attendance, payroll, and onboarding.',
                    'ar' => 'منصة موارد بشرية لإدارة الحضور والرواتب والانضمام.'
                ],
                'image_path' => 'https://images.pexels.com/photos/4474272/pexels-photo-4474272.jpeg',
                'technologies' => ['Next.js', 'Express.js', 'MongoDB'],
                'live_url' => 'https://example.com/hrcore',
                'github_url' => 'https://github.com/hrcore',
                'is_active' => true,
            ],

            [
                'title' => [
                    'en' => 'Travelio Booking Platform',
                    'ar' => 'منصة ترافيليو للحجوزات'
                ],
                'slug' => [
                    'en' => 'travelio-booking-platform',
                    'ar'
                ],
                'category_id' => 1,
                'description' => [
                    'en' => 'Online booking platform for travel and accommodation.',
                    'ar' => 'منصة ترافيليو للحجوزات.'
                ],
                'image_path' => 'https://images.pexels.com/photos/4474272/pexels-photo-4474272.jpeg',
                'technologies' => ['React.js', 'Node.js', 'MongoDB'],
                'live_url' => 'https://example.com/travelio',
                'github_url' => 'https://github.com/travelio',
                'is_active' => true,
            ],
        ];

        foreach ($projects as $project) {
            Project::create($project);
        }
    }
}
