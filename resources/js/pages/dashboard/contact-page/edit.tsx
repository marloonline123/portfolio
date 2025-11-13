import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import LocalDropdown from '@/components/shared/local-dropdown';
import InputError from '@/components/input-error';
import FormButton from '@/components/shared/form-button';
import AppLayout from '@/layouts/app-layout';

interface ContactPage {
    id: number;
    title: { [locale: string]: string };
    subtitle: { [locale: string]: string };
    description: { [locale: string]: string };
    email: string;
    phone: string;
    location: string;
}

interface Props {
    contactPage: ContactPage;
}

export default function Edit({ contactPage }: Props) {
    const [selectedLanguage, setSelectedLanguage] = useState<string>('en');

    const { data, setData, put, processing, errors } = useForm({
        title: contactPage.title || { en: '', ar: '' },
        subtitle: contactPage.subtitle || { en: '', ar: '' },
        description: contactPage.description || { en: '', ar: '' },
        email: contactPage.email || '',
        phone: contactPage.phone || '',
        location: contactPage.location || '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(route('dashboard.contact-page.update'));
    };

    return (
        <AppLayout>
            <Head title="Edit Contact Page" />

            <main className="p-7">
                <div className="flex items-center gap-4 mb-6">
                    <h1 className="text-2xl font-bold">Edit Contact Page</h1>
                </div>

                <form onSubmit={handleSubmit} className="relative">
                    <div className="absolute -top-7 right-0 z-10">
                        <LocalDropdown
                            value={selectedLanguage}
                            onChange={setSelectedLanguage}
                            error={errors.title?.[selectedLanguage as keyof typeof errors.title] as string}
                            htmlFor="language-select"
                        />
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="title" className="text-right">
                                Title
                            </Label>
                            <div className="col-span-3">
                                <Input
                                    id="title"
                                    value={data.title[selectedLanguage] || ''}
                                    onChange={(e) => setData('title', { ...data.title, [selectedLanguage]: e.target.value })}
                                    placeholder="Enter title"
                                    disabled={processing}
                                />
                                <InputError message={errors['title.' + selectedLanguage as keyof typeof errors]} />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="subtitle" className="text-right">
                                Subtitle
                            </Label>
                            <div className="col-span-3">
                                <Input
                                    id="subtitle"
                                    value={data.subtitle[selectedLanguage] || ''}
                                    onChange={(e) => setData('subtitle', { ...data.subtitle, [selectedLanguage]: e.target.value })}
                                    placeholder="Enter subtitle"
                                    disabled={processing}
                                />
                                <InputError message={errors['subtitle.' + selectedLanguage as keyof typeof errors]} />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description" className="text-right">
                                Description
                            </Label>
                            <div className="col-span-3">
                                <Textarea
                                    id="description"
                                    value={data.description[selectedLanguage] || ''}
                                    onChange={(e) => setData('description', { ...data.description, [selectedLanguage]: e.target.value })}
                                    placeholder="Enter description"
                                    rows={4}
                                    disabled={processing}
                                />
                                <InputError message={errors['description.' + selectedLanguage as keyof typeof errors]} />
                            </div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-right">
                                    Email
                                </Label>
                                <div className="col-span-3">
                                    <Input
                                        id="email"
                                        type="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        placeholder="Enter email"
                                        disabled={processing}
                                    />
                                    <InputError message={errors.email} />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="phone" className="text-right">
                                    Phone
                                </Label>
                                <div className="col-span-3">
                                    <Input
                                        id="phone"
                                        value={data.phone}
                                        onChange={(e) => setData('phone', e.target.value)}
                                        placeholder="Enter phone"
                                        disabled={processing}
                                    />
                                    <InputError message={errors.phone} />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="location" className="text-right">
                                    Location
                                </Label>
                                <div className="col-span-3">
                                    <Input
                                        id="location"
                                        value={data.location}
                                        onChange={(e) => setData('location', e.target.value)}
                                        placeholder="Enter location"
                                        disabled={processing}
                                    />
                                    <InputError message={errors.location} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end pt-4">
                        <FormButton
                            text="Update Contact Page"
                            loadingText="Updating..."
                            isLoading={processing}
                        />
                    </div>
                </form>
            </main>
        </AppLayout>
    );
}