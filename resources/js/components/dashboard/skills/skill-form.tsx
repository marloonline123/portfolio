import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import InputError from '@/components/input-error';
import FormButton from '@/components/shared/form-button';
import LocalDropdown from '@/components/shared/local-dropdown';
import { Skill } from '@/types/skill';

interface SkillFormProps {
    skill?: Skill | null;
    action: string;
    method?: 'post' | 'put' | 'patch';
    onSuccess?: () => void;
    submitText?: string;
    submitLoadingText?: string;
}

export default function SkillForm({ skill, action, method = 'post', onSuccess, submitText = 'Submit', submitLoadingText = 'Submitting...' }: SkillFormProps) {
    const [selectedLanguage, setSelectedLanguage] = useState<string>('en');

    const { data, setData, post, processing, errors } = useForm({
        name: {
            en: skill?.name.en || '',
            ar: skill?.name.ar || '',
        },
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
                    <Label htmlFor="skill-name" className="text-right">
                        Name
                    </Label>
                    <div className="col-span-3">
                        <Input
                            id="skill-name"
                            value={data.name[selectedLanguage] || ''}
                            onChange={(e) => setData('name', { ...data.name, [selectedLanguage]: e.target.value })}
                            placeholder="Enter skill name"
                            disabled={processing}
                        />
                        <InputError message={errors.name?.[selectedLanguage as keyof typeof errors.name] as string} />
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
