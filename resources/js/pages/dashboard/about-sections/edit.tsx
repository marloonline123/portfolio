import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { AboutSection } from '@/types/about-section';
import LocalDropdown from '@/components/shared/local-dropdown';
import InputError from '@/components/input-error';
import FormButton from '@/components/shared/form-button';
import AppLayout from '@/layouts/app-layout';

interface Props {
    aboutSection: AboutSection;
}

export default function Edit({ aboutSection }: Props) {
    const [selectedLanguage, setSelectedLanguage] = useState<string>('en');
    const { data, setData, put, processing, errors } = useForm({
        title: aboutSection.title || { en: '', ar: '' },
        subtitle: aboutSection.subtitle || { en: '', ar: '' },
        journey_description: aboutSection.journeyDescription || { en: '', ar: '' },
        specialization_description: aboutSection.specializationDescription || { en: '', ar: '' },
        is_active: aboutSection.isActive ?? true,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(route('dashboard.about-sections.update', aboutSection.id));
    };

    return (
        <AppLayout>
            <Head title="Edit About Section" />

            <div className="flex items-center gap-4 mb-6">
                <Link href={route('dashboard')} className="btn btn-outline">
                    <ArrowLeft size={16} />
                    Back to Dashboard
                </Link>
                <h1 className="text-2xl font-bold">Edit About Section</h1>
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
                <Card>
                    <CardHeader>
                        <CardTitle>About Section Content</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {/* Title */}
                        <div className="grid grid-cols-4 items-center gap-4">
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

                        {/* Subtitle */}
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="subtitle" className="text-right">
                                Subtitle
                            </Label>
                            <div className="col-span-3">
                                <Textarea
                                    id="subtitle"
                                    value={data.subtitle[selectedLanguage] || ''}
                                    onChange={(e) => setData('subtitle', { ...data.subtitle, [selectedLanguage]: e.target.value })}
                                    placeholder="Enter subtitle"
                                    rows={3}
                                    disabled={processing}
                                />
                                <InputError message={errors['subtitle.' + selectedLanguage as keyof typeof errors]} />
                            </div>
                        </div>

                        {/* Journey Description */}
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="journey_description" className="text-right">
                                Journey Description
                            </Label>
                            <div className="col-span-3">
                                <Textarea
                                    id="journey_description"
                                    value={data.journey_description[selectedLanguage] || ''}
                                    onChange={(e) => setData('journey_description', { ...data.journey_description, [selectedLanguage]: e.target.value })}
                                    placeholder="Enter journey description"
                                    rows={4}
                                    disabled={processing}
                                />
                                <InputError message={errors['journey_description.' + selectedLanguage as keyof typeof errors]} />
                            </div>
                        </div>

                        {/* Specialization Description */}
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="specialization_description" className="text-right">
                                Specialization Description
                            </Label>
                            <div className="col-span-3">
                                <Textarea
                                    id="specialization_description"
                                    value={data.specialization_description[selectedLanguage] || ''}
                                    onChange={(e) => setData('specialization_description', { ...data.specialization_description, [selectedLanguage]: e.target.value })}
                                    placeholder="Enter specialization description"
                                    rows={4}
                                    disabled={processing}
                                />
                                <InputError message={errors['specialization_description.' + selectedLanguage as keyof typeof errors]} />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="flex justify-end pt-4">
                    <FormButton
                        text="Update About Section"
                        loadingText="Updating..."
                        isLoading={processing}
                    />
                </div>
            </form>
        </AppLayout>
    );
}