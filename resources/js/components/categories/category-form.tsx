import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import InputError from '@/components/input-error';
import FormButton from '@/components/shared/form-button';
import LocalDropdown from '@/components/shared/local-dropdown';
import { Category } from '@/types/category';
import { Checkbox } from '@/components/ui/checkbox';

interface CategoryFormProps {
    category?: Category | null;
    action: string;
    method?: 'post' | 'put' | 'patch';
    onSuccess?: () => void;
    submitText?: string;
    submitLoadingText?: string;
}

export default function CategoryForm({ category, action, method = 'post', onSuccess, submitText = 'Submit', submitLoadingText = 'Submitting...' }: CategoryFormProps) {
    const [selectedLanguage, setSelectedLanguage] = useState<string>('en');

    const { data, setData, post, processing, errors } = useForm({
        name: {
            en: category?.name.en || '',
            ar: category?.name.ar || '',
        },
        slug: {
            en: category?.slug.en || '',
            ar: category?.slug.ar || '',
        },
        description: {
            en: category?.description?.en || '',
            ar: category?.description?.ar || '',
        },
        is_active: category?.is_active ?? false,
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

    return (
        <form onSubmit={handleSubmit} className="relative">
            <div className="absolute -top-7 right-0 z-10">
                <LocalDropdown
                    value={selectedLanguage}
                    onChange={setSelectedLanguage}
                    error={errors.name?.[selectedLanguage as keyof typeof errors.name] as string}
                    htmlFor="language-select"
                />
            </div>
            <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="category-name" className="text-right">
                        Name
                    </Label>
                    <div className="col-span-3">
                        <Input
                            id="category-name"
                            value={data.name[selectedLanguage] || ''}
                            onChange={(e) => setData('name', { ...data.name, [selectedLanguage]: e.target.value })}
                            placeholder="Enter category name"
                            disabled={processing}
                        />
                        <InputError message={errors.name?.[selectedLanguage as keyof typeof errors.name] as string} />
                    </div>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="category-slug" className="text-right">
                        Slug
                    </Label>
                    <div className="col-span-3">
                        <Input
                            id="category-slug"
                            value={data.slug[selectedLanguage] || ''}
                            onChange={(e) => setData('slug', { ...data.slug, [selectedLanguage]: e.target.value })}
                            placeholder="Enter category slug"
                            disabled={processing}
                        />
                        <InputError message={errors.slug?.[selectedLanguage as keyof typeof errors.slug] as string} />
                    </div>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="category-description" className="text-right">
                        Description
                    </Label>
                    <div className="col-span-3">
                        <Input
                            id="category-description"
                            value={data.description[selectedLanguage] || ''}
                            onChange={(e) => setData('description', { ...data.description, [selectedLanguage]: e.target.value })}
                            placeholder="Enter category description"
                            disabled={processing}
                        />
                        <InputError message={errors.description?.[selectedLanguage as keyof typeof errors.description] as string} />
                    </div>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="category-is-active" className="text-right">
                        Is Active
                    </Label>
                    <div className="col-span-3">
                        <Checkbox
                            id="category-is-active"
                            checked={data.is_active}
                            onCheckedChange={(checked) => setData('is_active', checked as boolean)}
                            disabled={processing}
                        />
                        <InputError message={errors.is_active} />
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