<?php

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

Route::middleware(['auth', 'verified'])->prefix('dashboard')->group(function () {
    Route::get('/', function () {
        return Inertia::render('dashboard/dashboard');
    })->name('dashboard');

    Route::name('dashboard.')->group(function () {
        Route::apiResource('skills', SkillController::class)->except('show');
    });
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
