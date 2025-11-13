<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Http\Requests\Public\ContactMessageRequest;
use App\Models\ContactPage;
use App\Models\Message;
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

    public function store(ContactMessageRequest $request)
    {
        Message::create($request->validated());

        return back()->with('success', 'Thank you for your message! I\'ll get back to you soon.');
    }
}
