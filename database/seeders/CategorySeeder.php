<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            [
                'name' => [
                    'en' => 'Web Development',
                    'ar' => 'تطوير الويب'
                ],
                'slug' => [
                    'en' => 'web-development',
                    'ar' => 'تطوير-الويب'
                ],
                'description' => [
                    'en' => 'Web development projects and applications',
                    'ar' => 'مشاريع وتطبيقات تطوير الويب'
                ],
                'is_active' => true,
            ],
            [
                'name' => [
                    'en' => 'Mobile Development',
                    'ar' => 'تطوير التطبيقات المحمولة'
                ],
                'slug' => [
                    'en' => 'mobile-development',
                    'ar' => 'تطوير-التطبيقات-المحمولة'
                ],
                'description' => [
                    'en' => 'Mobile application development projects',
                    'ar' => 'مشاريع تطوير التطبيقات المحمولة'
                ],
                'is_active' => true,
            ],
            [
                'name' => [
                    'en' => 'Desktop Development',
                    'ar' => 'تطوير التطبيقات المكتبية'
                ],
                'slug' => [
                    'en' => 'desktop-development',
                    'ar' => 'تطوير-التطبيقات-المكتبية'
                ],
                'description' => [
                    'en' => 'Desktop application development projects',
                    'ar' => 'مشاريع تطوير التطبيقات المكتبية'
                ],
                'is_active' => true,
            ],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}
