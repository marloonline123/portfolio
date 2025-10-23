import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import InputError from '@/components/input-error';

interface LocalDropdownProps {
    value?: string;
    onChange?: (value: string) => void;
    error?: string;
    htmlFor?: string;
}

export default function LocalDropdown({
    value = 'en',
    onChange,
    error,
    htmlFor = 'language',
}: LocalDropdownProps) {
    return (
        <div className="flex justify-end">
            <div className="w-20">
                <Select value={value} onValueChange={onChange}>
                    <SelectTrigger id={htmlFor} className="h-8 text-xs">
                        <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="en">EN</SelectItem>
                        <SelectItem value="ar">AR</SelectItem>
                    </SelectContent>
                </Select>
                {error && <InputError message={error} />}
            </div>
        </div>
    );
}
