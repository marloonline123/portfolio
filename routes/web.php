<?php

use App\Http\Controllers\Dashboard\AboutSectionController;
use App\Http\Controllers\Dashboard\CategoryController;
use App\Http\Controllers\Dashboard\ContactPageController;
use App\Http\Controllers\Dashboard\FieldsSectionController;
use App\Http\Controllers\Dashboard\HeroSectionController;
use App\Http\Controllers\Dashboard\MessageController;
use App\Http\Controllers\Dashboard\ProjectController;
use App\Http\Controllers\Dashboard\SkillController;
use App\Http\Controllers\Dashboard\ToolController;
use App\Http\Controllers\LocaleController;
use App\Http\Controllers\Public\ContactController;
use App\Http\Controllers\Public\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/test-session', function () {
    session()->put('x', 'hello world');
    session()->save();

    return session()->get('x');
});


// Public Routes
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/contact', [ContactController::class, 'index'])->name('contact');
Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');
Route::get('/projects', [App\Http\Controllers\Public\ProjectController::class, 'index'])->name('projects.index');
Route::get('/projects/{slug}', [App\Http\Controllers\Public\ProjectController::class, 'show'])->name('projects.show');

// Language Toggle
Route::post('/locale/{locale}', LocaleController::class)->name('set-locale');

// Dashboard Routes
Route::middleware(['auth', 'verified'])->prefix('dashboard')->group(function () {
    Route::get('/', function () {
        return Inertia::render('dashboard/dashboard');
    })->name('dashboard');

    Route::name('dashboard.')->group(function () {
        // Tool Routes
        Route::apiResource('tools', ToolController::class)->except('show');

        // Skill Routes
        Route::apiResource('skills', SkillController::class)->except('show');

        // Category Routes
        Route::apiResource('categories', CategoryController::class)->except('show');

        // Project Routes
        Route::resource('projects', ProjectController::class);

        // Hero Section Routes
        Route::get('hero-sections', [HeroSectionController::class, 'edit'])->name('hero-sections.edit');
        Route::put('hero-sections', [HeroSectionController::class, 'update'])->name('hero-sections.update');

        // About Section Routes
        Route::get('about-sections', [AboutSectionController::class, 'edit'])->name('about-sections.edit');
        Route::put('about-sections', [AboutSectionController::class, 'update'])->name('about-sections.update');

        // Fields Section Routes
        Route::apiResource('fields-sections', FieldsSectionController::class)->except('show');

        // Contact Page Routes
        Route::get('contact-page', [ContactPageController::class, 'edit'])->name('contact-page.edit');
        Route::put('contact-page', [ContactPageController::class, 'update'])->name('contact-page.update');

        // Message Routes
        Route::resource('messages', MessageController::class)->only(['index', 'show', 'destroy']);
    });
});

// Error pages for development/testing
if (app()->environment(['local', 'testing'])) {
    Route::get('/test-404', function () {
        abort(404);
    });
    Route::get('/test-403', function () {
        abort(403);
    });
    Route::get('/test-500', function () {
        abort(500);
    });
    Route::get('/test-503', function () {
        abort(503);
    });
}

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
