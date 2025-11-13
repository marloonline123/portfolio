<?php

namespace Database\Seeders;

use App\Models\ContactPage;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ContactPageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ContactPage::create([
            'title' => [
                'en' => 'Get In Touch',
                'ar' => 'تواصل معي'
            ],
            'subtitle' => [
                'en' => 'Have a project in mind or want to discuss potential opportunities? I\'d love to hear from you!',
                'ar' => 'هل لديك مشروع في الاعتبار أو تريد مناقشة فرص محتملة؟ أحب أن أسمع منك!'
            ],
            'description' => [
                'en' => 'Feel free to reach out to me via email or phone. I\'m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.',
                'ar' => 'لا تتردد في التواصل معي عبر البريد الإلكتروني أو الهاتف. أنا دائمًا منفتح لمناقشة مشاريع جديدة أو أفكار إبداعية أو فرص لتكون جزءًا من رؤيتك.'
            ],
            'email' => 'johndoe@example.com',
            'phone' => '+00 (234) 567-890',
            'location' => 'Available for remote work worldwide',
        ]);
    }
}
