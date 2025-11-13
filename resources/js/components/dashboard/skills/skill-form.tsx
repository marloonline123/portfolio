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
        item_1: {
            en: skill?.item_1.en || '',
            ar: skill?.item_1.ar || '',
        },
        item_2: {
            en: skill?.item_2.en || '',
            ar: skill?.item_2.ar || '',
        },
        item_3: {
            en: skill?.item_3.en || '',
            ar: skill?.item_3.ar || '',
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
                            value={data.name[selectedLanguage as keyof typeof data.name] || ''}
                            onChange={(e) => setData('name', { ...data.name, [selectedLanguage]: e.target.value })}
                            placeholder="Enter skill name"
                            disabled={processing}
                        />
                        <InputError message={errors['name.' + selectedLanguage as keyof typeof errors]} />
                    </div>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="skill-item-1" className="text-right">
                        Item 1
                    </Label>
                    <div className="col-span-3">
                        <Input
                            id="skill-item-1"
                            value={data.item_1[selectedLanguage as keyof typeof data.item_1] || ''}
                            onChange={(e) => setData('item_1', { ...data.item_1, [selectedLanguage]: e.target.value })}
                            placeholder="Enter item 1"
                            disabled={processing}
                        />
                        <InputError message={errors['item_1.' + selectedLanguage as keyof typeof errors]} />
                    </div>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="skill-item-2" className="text-right">
                        Item 2
                    </Label>
                    <div className="col-span-3">
                        <Input
                            id="skill-item-2"
                            value={data.item_2[selectedLanguage as keyof typeof data.item_2] || ''}
                            onChange={(e) => setData('item_2', { ...data.item_2, [selectedLanguage]: e.target.value })}
                            placeholder="Enter item 2"
                            disabled={processing}
                        />
                        <InputError message={errors['item_2.' + selectedLanguage as keyof typeof errors]} />
                    </div>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="skill-item-3" className="text-right">
                        Item 3
                    </Label>
                    <div className="col-span-3">
                        <Input
                            id="skill-item-3"
                            value={data.item_3[selectedLanguage as keyof typeof data.item_3] || ''}
                            onChange={(e) => setData('item_3', { ...data.item_3, [selectedLanguage]: e.target.value })}
                            placeholder="Enter item 3"
                            disabled={processing}
                        />
                        <InputError message={errors['item_3.' + selectedLanguage as keyof typeof errors]} />
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