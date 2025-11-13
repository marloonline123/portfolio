<?php

namespace Database\Seeders;

use App\Models\Tool;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ToolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $tools = [
            'HTML5',
            'CSS3',
            'JavaScript',
            'TypeScript',
            'React',
            'Vue',
            'Next.js',
            'Tailwind CSS',
            'PHP',
            'Laravel',
            'MySQL',
        ];

        foreach ($tools as $tool) {
            Tool::create([
                'name' => [
                    'en' => $tool,
                    'ar' => $tool, // Same as English as requested
                ],
            ]);
        }
    }
}
