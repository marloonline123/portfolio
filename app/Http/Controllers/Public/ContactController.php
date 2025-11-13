<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\ContactPage;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function index()
    {
        $contactData = ContactPage::first();

        return Inertia::render('public/contact', [
            'contactData' => $contactData,
        ]);
    }
}
