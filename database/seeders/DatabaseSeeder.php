<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::firstOrCreate(
            ['email' => 'admin@admin.net'],
            [
                'name' => 'Admin User',
                'password' => Hash::make('12345678'),
                'email_verified_at' => now(),
            ]
        );

        $this->call([
            HeroSectionSeeder::class,
            CategorySeeder::class,
            ToolSeeder::class,
            ProjectSeeder::class,
            FieldsSectionSeeder::class,
            SkillSeeder::class,
            ContactPageSeeder::class,
        ]);
    }
}
