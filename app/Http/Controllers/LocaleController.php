<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class LocaleController extends Controller
{

    public function __invoke(Request $request, string $locale)
    {
        Log::info('getting locale: ' . $locale);
        if (! in_array($locale, ['en', 'ar'])) {
            return;
        }
        session()->put('locale', $locale);
        session()->save();
        app()->setLocale($locale);
    }
}
