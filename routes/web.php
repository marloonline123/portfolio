<?php

use App\Http\Controllers\Dashboard\CategoryController;
use App\Http\Controllers\Dashboard\ProjectController;
use App\Http\Controllers\Dashboard\SkillController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Portfolio');
})->name('home');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::get('/projects/{slug}', function ($slug) {
    // $project = \App\Models\Project::where('slug->' . app()->getLocale(), $slug)->first();
    $project = [
        'title' => [
            'en' => 'Sample Project',
            'ar' => 'Proyecto de Ejemplo',
        ],
        'description' => [
            'en' => 'This is a sample project description in English. lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'ar' => 'Esta es una descripción de proyecto de ejemplo en español.',
        ],
        'imageUrl' => 'https://d2j6dbq0eux0bg.cloudfront.net/images/66610504/2636936256.jpg',
        'technologies' => ['Laravel', 'Inertia.js', 'React'],
        'liveUrl' => 'https://example.com',
        'githubUrl' => 'https://github.com/example/project',
        'is_active' => true,
        'created_at' => '2025-10-28 12:00:00',
    ];

    if (!$project) {
        abort(404);
    }

    return Inertia::render('ProjectDetails', [
        'project' => $project,
    ]);
})->name('projects.show');

Route::middleware(['auth', 'verified'])->prefix('dashboard')->group(function () {
    Route::get('/', function () {
        return Inertia::render('dashboard/dashboard');
    })->name('dashboard');

    Route::name('dashboard.')->group(function () {
        Route::apiResource('skills', SkillController::class)->except('show');
        Route::apiResource('categories', CategoryController::class)->except('show');
        Route::resource('projects', ProjectController::class);
    });
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
