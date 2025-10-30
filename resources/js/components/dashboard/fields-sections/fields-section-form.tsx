import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import InputError from '@/components/input-error';
import FormButton from '@/components/shared/form-button';
import LocalDropdown from '@/components/shared/local-dropdown';
import { ImageUpload } from '@/components/shared/image-upload';
import { FieldsSection } from '@/types/fields-section';

interface FieldsSectionFormProps {
    fieldsSection?: FieldsSection | null;
    action: string;
    method?: 'post' | 'put' | 'patch';
    onSuccess?: () => void;
    submitText?: string;
    submitLoadingText?: string;
}

export default function FieldsSectionForm({ fieldsSection, action, method = 'post', onSuccess, submitText = 'Submit', submitLoadingText = 'Submitting...' }: FieldsSectionFormProps) {
    const [selectedLanguage, setSelectedLanguage] = useState<string>('en');

    const { data, setData, post, processing, errors } = useForm<{
        name: { en: string; ar: string };
        description: { en: string; ar: string };
        icon: File | null;
        is_active: boolean;
        _method?: string;
    }>({
        name: {
            en: fieldsSection?.name.en || '',
            ar: fieldsSection?.name.ar || '',
        },
        description: {
            en: fieldsSection?.description.en || '',
            ar: fieldsSection?.description.ar || '',
        },
        icon: null,
        is_active: fieldsSection?.isActive ?? true,
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
                    <Label htmlFor="fields-section-name" className="text-right">
                        Name
                    </Label>
                    <div className="col-span-3">
                        <Input
                            id="fields-section-name"
                            value={data.name[selectedLanguage as keyof typeof data.name] || ''}
                            onChange={(e) => setData('name', { ...data.name, [selectedLanguage]: e.target.value })}
                            placeholder="Enter fields section name"
                            disabled={processing}
                        />
                        <InputError message={errors['name.' + selectedLanguage as keyof typeof errors]} />
                    </div>
                </div>
                <div className="grid grid-cols-4 items-start gap-4">
                    <Label htmlFor="fields-section-description" className="text-right pt-2">
                        Description
                    </Label>
                    <div className="col-span-3">
                        <Textarea
                            id="fields-section-description"
                            value={data.description[selectedLanguage as keyof typeof data.description] || ''}
                            onChange={(e) => setData('description', { ...data.description, [selectedLanguage]: e.target.value })}
                            placeholder="Enter fields section description"
                            disabled={processing}
                            rows={3}
                        />
                        <InputError message={errors['description.' + selectedLanguage as keyof typeof errors]} />
                    </div>
                </div>
                <div className="grid grid-cols-4 items-start gap-4">
                    <Label htmlFor="fields-section-icon" className="text-right pt-2">
                        Icon
                    </Label>
                    <div className="col-span-3">
                        <ImageUpload
                            name="icon"
                            label=""
                            value={fieldsSection?.iconPath || null}
                            onChange={(file) => setData('icon', file)}
                            onRemove={() => setData('icon', null)}
                            error={errors.icon}
                            maxSize={2}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="fields-section-active" className="text-right">
                        Active
                    </Label>
                    <div className="col-span-3">
                        <Switch
                            id="fields-section-active"
                            checked={data.is_active}
                            onCheckedChange={(checked) => setData('is_active', checked)}
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