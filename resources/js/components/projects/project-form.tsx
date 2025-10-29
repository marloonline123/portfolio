import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import InputError from '@/components/input-error';
import FormButton from '@/components/shared/form-button';
import LocalDropdown from '@/components/shared/local-dropdown';
import { ImageUpload } from '@/components/shared/image-upload';
import { Project } from '@/types/project';
import { Category } from '@/types/category';
import { Checkbox } from '@/components/ui/checkbox';
import { useSlugGenerator } from '@/hooks/use-slug-generator';
import { Switch } from '../ui/switch';

interface ProjectFormProps {
    project?: Project | null;
    categories: Category[];
    action: string;
    method?: 'post' | 'put' | 'patch';
    onSuccess?: () => void;
    submitText?: string;
    submitLoadingText?: string;
}

export default function ProjectForm({
    project,
    categories,
    action,
    method = 'post',
    onSuccess,
    submitText = 'Submit',
    submitLoadingText = 'Submitting...'
}: ProjectFormProps) {
    const [selectedLanguage, setSelectedLanguage] = useState<string>('en');
    const { generateSlug } = useSlugGenerator();

    const { data, setData, post, processing, errors } = useForm({
        category_id: project?.category.id || '',
        title: {
            en: project?.title.en || '',
            ar: project?.title.ar || '',
        },
        slug: {
            en: project?.slug.en || '',
            ar: project?.slug.ar || '',
        },
        description: {
            en: project?.description.en || '',
            ar: project?.description.ar || '',
        },
        image: null as File | null,
        image_path: project?.imagePath || '',
        technologies: project?.technologies || [],
        live_url: project?.liveUrl || '',
        github_url: project?.githubUrl || '',
        is_active: project?.isActive ?? true,
        _method: method !== 'post' ? method : undefined,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        post(action, {
            onSuccess: () => {
                if (onSuccess) onSuccess();
            },
        });
    };

    const handleTitleChange = (value: string, language: string) => {
        setData('title', { ...data.title, [language]: value });

        // Auto-generate slug if it's empty or matches the old title's slug
        const currentSlug = data.slug[language as keyof typeof data.slug];
        const oldTitleSlug = generateSlug(data.title[language as keyof typeof data.title] || '');
        if (!currentSlug || currentSlug === oldTitleSlug) {
            setData('slug', { ...data.slug, [language]: generateSlug(value) });
        }
    };

    const handleTechnologiesChange = (value: string) => {
        const technologies = value.split(',').map(tech => tech.trim()).filter(tech => tech);
        setData('technologies', technologies);
    };

    return (
        <form onSubmit={handleSubmit} className="relative">
            <div className="absolute -top-2 right-0 z-10">
                <LocalDropdown
                    value={selectedLanguage}
                    onChange={setSelectedLanguage}
                    error={errors.title?.[selectedLanguage as keyof typeof errors.title] as string}
                    htmlFor="language-select"
                />
            </div>
            <div className="grid gap-4 py-4 pt-8">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className="space-y-2">
                        <Label htmlFor="project-title" className="text-right">
                            Title
                        </Label>
                        <div className="col-span-3">
                            <Input
                                id="project-title"
                                value={data.title[selectedLanguage as keyof typeof data.title] || ''}
                                onChange={(e) => handleTitleChange(e.target.value, selectedLanguage)}
                                placeholder="Enter project title"
                                disabled={processing}
                            />
                            <InputError message={errors.title?.[selectedLanguage as keyof typeof errors.title] as string} />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="project-slug" className="text-right">
                            Slug
                        </Label>
                        <div className="col-span-3">
                            <Input
                                id="project-slug"
                                value={data.slug[selectedLanguage as keyof typeof data.slug] || ''}
                                onChange={(e) => setData('slug', { ...data.slug, [selectedLanguage]: e.target.value })}
                                placeholder="Enter project slug"
                                disabled={processing}
                            />
                            <InputError message={errors.slug?.[selectedLanguage as keyof typeof errors.slug] as string} />
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="project-category" className="text-right">
                        Category
                    </Label>
                    <div className="">
                        <Select
                            value={data.category_id.toString()}
                            onValueChange={(value) => setData('category_id', value)}
                            disabled={processing}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                            <SelectContent>
                                {categories.map((category) => (
                                    <SelectItem key={category.id} value={category.id.toString()}>
                                        {category.name.en}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <InputError message={errors.category_id} />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="project-technologies" className="text-right">
                        Technologies
                    </Label>
                    <div className="col-span-3">
                        <Input
                            id="project-technologies"
                            value={data.technologies.join(', ')}
                            onChange={(e) => handleTechnologiesChange(e.target.value)}
                            placeholder="Enter technologies (comma separated)"
                            disabled={processing}
                        />
                        <InputError message={errors.technologies} />
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className="space-y-2">
                        <Label htmlFor="project-live-url" className="text-right">
                            Live URL
                        </Label>
                        <div className="col-span-3">
                            <Input
                                id="project-live-url"
                                value={data.live_url}
                                onChange={(e) => setData('live_url', e.target.value)}
                                placeholder="Enter live URL"
                                disabled={processing}
                            />
                            <InputError message={errors.live_url} />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="project-github-url" className="text-right">
                            GitHub URL
                        </Label>
                        <div className="col-span-3">
                            <Input
                                id="project-github-url"
                                value={data.github_url}
                                onChange={(e) => setData('github_url', e.target.value)}
                                placeholder="Enter GitHub URL"
                                disabled={processing}
                            />
                            <InputError message={errors.github_url} />
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="project-is-active" className="text-right">
                        Is Active
                    </Label>
                    <div className="col-span-3">
                        <Switch
                            id="project-is-active"
                            checked={data.is_active}
                            onCheckedChange={(checked) => setData('is_active', checked as boolean)}
                            disabled={processing}
                            className='scale-110'
                        />
                        <InputError message={errors.is_active} />
                    </div>
                </div>

                <div className="space-y-2">
                    <ImageUpload
                        name="image"
                        label="Image"
                        value={data.image_path}
                        onChange={(file) => {
                            if (file) {
                                setData('image', file);
                            } else {
                                setData('image', null);
                            }
                        }}
                        onRemove={() => setData('image_path', '')}
                        error={errors.image_path}
                        maxSize={5}
                        accept="image/*"
                        description="Upload a project image (PNG, JPG, JPEG - Max 5MB)"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="project-description" className="text-right pt-2">
                        Description
                    </Label>
                    <div className="col-span-3">
                        <Textarea
                            id="project-description"
                            value={data.description[selectedLanguage as keyof typeof data.description] || ''}
                            onChange={(e) => setData('description', { ...data.description, [selectedLanguage]: e.target.value })}
                            placeholder="Enter project description"
                            disabled={processing}
                            rows={15}
                        />
                        <InputError message={errors.description?.[selectedLanguage as keyof typeof errors.description] as string} />
                    </div>
                </div>
            </div>
            <div className="flex justify-end pt-4">
                <FormButton
                    text={submitText}
                    loadingText={submitLoadingText}
                    isLoading={processing}
                />
            </div>
        </form>
    );
}