import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { HeroSection } from '@/types/hero-section';
import LocalDropdown from '@/components/shared/local-dropdown';
import InputError from '@/components/input-error';
import FormButton from '@/components/shared/form-button';
import AppLayout from '@/layouts/app-layout';

interface Props {
    heroSection: HeroSection;
}

export default function Edit({ heroSection }: Props) {
    const [selectedLanguage, setSelectedLanguage] = useState<string>('en');

    const { data, setData, put, processing, errors } = useForm({
        name: heroSection.name || { en: '', ar: '' },
        role: heroSection.role || { en: '', ar: '' },
        description: heroSection.description || { en: '', ar: '' },
        years_experience: heroSection.yearsExperience || 0,
        projects_count: heroSection.projectsCount || 0,
        github_url: heroSection.githubUrl || '',
        linkedin_url: heroSection.linkedinUrl || '',
        is_active: heroSection.isActive ?? true,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(route('dashboard.hero-sections.update', heroSection.id));
    };

    console.log(heroSection);
    

    return (
        <AppLayout>
            <Head title="Edit Hero Section" />

            <main className="p-7">
                <div className="flex items-center gap-4 mb-6">
                    <h1 className="text-2xl font-bold">Edit Hero Section</h1>
                </div>

                <form onSubmit={handleSubmit} className="relative">
                    <div className="absolute -top-7 right-0 z-10">
                        <LocalDropdown
                            value={selectedLanguage}
                            onChange={setSelectedLanguage}
                            error={errors.name?.[selectedLanguage as keyof typeof errors.name] as string}
                            htmlFor="language-select"
                        />
                    </div>

                    <div className="space-y-6">
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-right">
                                    Name
                                </Label>
                                <div className="col-span-3">
                                    <Input
                                        id="name"
                                        value={data.name[selectedLanguage] || ''}
                                        onChange={(e) => setData('name', { ...data.name, [selectedLanguage]: e.target.value })}
                                        placeholder="Enter name"
                                        disabled={processing}
                                    />
                                    <InputError message={errors['name.' + selectedLanguage as keyof typeof errors]} />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="role" className="text-right">
                                    Role
                                </Label>
                                <div className="col-span-3">
                                    <Input
                                        id="role"
                                        value={data.role[selectedLanguage] || ''}
                                        onChange={(e) => setData('role', { ...data.role, [selectedLanguage]: e.target.value })}
                                        placeholder="Enter role"
                                        disabled={processing}
                                    />
                                    <InputError message={errors['role.' + selectedLanguage as keyof typeof errors]} />
                                </div>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div className="space-y-2">
                                <Label htmlFor="years_experience" className="text-right">
                                    Years of Experience
                                </Label>
                                <div className="col-span-3">
                                    <Input
                                        id="years_experience"
                                        type="number"
                                        value={data.years_experience}
                                        onChange={(e) => setData('years_experience', parseInt(e.target.value) || 0)}
                                        min="0"
                                        max="50"
                                        disabled={processing}
                                    />
                                    <InputError message={errors.years_experience} />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="projects_count" className="text-right">
                                    Projects Count
                                </Label>
                                <div className="col-span-3">
                                    <Input
                                        id="projects_count"
                                        type="number"
                                        value={data.projects_count}
                                        onChange={(e) => setData('projects_count', parseInt(e.target.value) || 0)}
                                        min="0"
                                        max="1000"
                                        disabled={processing}
                                    />
                                    <InputError message={errors.projects_count} />
                                </div>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div className="space-y-2">
                                <Label htmlFor="github_url" className="text-right">
                                    GitHub URL
                                </Label>
                                <div className="col-span-3">
                                    <Input
                                        id="github_url"
                                        value={data.github_url}
                                        onChange={(e) => setData('github_url', e.target.value)}
                                        placeholder="https://github.com/username"
                                        disabled={processing}
                                    />
                                    <InputError message={errors.github_url} />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="linkedin_url" className="text-right">
                                    LinkedIn URL
                                </Label>
                                <div className="col-span-3">
                                    <Input
                                        id="linkedin_url"
                                        value={data.linkedin_url}
                                        onChange={(e) => setData('linkedin_url', e.target.value)}
                                        placeholder="https://linkedin.com/in/username"
                                        disabled={processing}
                                    />
                                    <InputError message={errors.linkedin_url} />
                                </div>
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
                    </div>

                    <div className="flex justify-end pt-4">
                        <FormButton
                            text="Update Hero Section"
                            loadingText="Updating..."
                            isLoading={processing}
                        />
                    </div>
                </form>
            </main>
        </AppLayout>
    );
}