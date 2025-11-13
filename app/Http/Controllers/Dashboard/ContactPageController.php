<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\ContactPageRequest;
use App\Models\ContactPage;

class ContactPageController extends Controller
{
    /**
     * Show the form for editing the contact page.
     */
    public function edit()
    {
        $data['contactPage'] = ContactPage::first() ?? [];

        return inertia('dashboard/contact-page/edit', $data);
    }

    /**
     * Update the contact page in storage.
     */
    public function update(ContactPageRequest $request)
    {
        $contactPage = ContactPage::first();

        if ($contactPage) {
            $contactPage->update($request->validated());
        } else {
            ContactPage::create($request->validated());
        }

        return to_route('dashboard.contact-page.edit')
            ->with('success', 'Contact page updated successfully.');
    }
}
