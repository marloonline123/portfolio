import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import InputError from '@/components/input-error';
import FormButton from '@/components/shared/form-button';
import LocalDropdown from '@/components/shared/local-dropdown';
import { Tool } from '@/types/tool';

interface ToolFormProps {
    tool?: Tool | null;
    action: string;
    method?: 'post' | 'put' | 'patch';
    onSuccess?: () => void;
    submitText?: string;
    submitLoadingText?: string;
}

export default function ToolForm({ tool, action, method = 'post', onSuccess, submitText = 'Submit', submitLoadingText = 'Submitting...' }: ToolFormProps) {
    const [selectedLanguage, setSelectedLanguage] = useState<string>('en');

    const { data, setData, post, processing, errors } = useForm({
        name: {
            en: tool?.name.en || '',
            ar: tool?.name.ar || '',
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
                    <Label htmlFor="tool-name" className="text-right">
                        Name
                    </Label>
                    <div className="col-span-3">
                        <Input
                            id="tool-name"
                            value={data.name[selectedLanguage as keyof typeof data.name] || ''}
                            onChange={(e) => setData('name', { ...data.name, [selectedLanguage]: e.target.value })}
                            placeholder="Enter tool name"
                            disabled={processing}
                        />
                        <InputError message={errors['name.' + selectedLanguage as keyof typeof errors]} />
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
