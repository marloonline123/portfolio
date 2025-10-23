import React, { useState, useEffect } from 'react';
import { SearchIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { router } from '@inertiajs/react';
import { useDebounce } from 'use-debounce';

interface SearchBarProps {
    placeholder?: string;
    initialValue?: string;
    routeName: string;
    preserveState?: boolean;
    debounceTime?: number;
}

export default function SearchBar({
    placeholder = 'Search...',
    initialValue = '',
    routeName,
    preserveState = true,
    debounceTime = 500,
}: SearchBarProps) {
    const [searchTerm, setSearchTerm] = useState(initialValue);
    const [debouncedSearchTerm] = useDebounce(searchTerm, debounceTime);

    // Effect to update internal searchTerm when initialValue (from URL) changes
    useEffect(() => {
        setSearchTerm(initialValue);
    }, [initialValue]);

    // Effect to update URL query when debouncedSearchTerm changes
    useEffect(() => {
        const currentUrlSearchParams = new URLSearchParams(window.location.search);
        const currentSearchParam = currentUrlSearchParams.get('search') || '';

        // Only trigger router.get if the debounced term is different from the current URL's search value
        if (debouncedSearchTerm !== currentSearchParam) {
            router.get(
                route(routeName),
                { search: debouncedSearchTerm, page: 1 },
                {
                    preserveState,
                    preserveScroll: true,
                    replace: true,
                }
            );
        }
    }, [debouncedSearchTerm, routeName, preserveState]); // Removed initialValue from dependencies

    const handleClear = () => {
        setSearchTerm(''); // Clear internal state, which will trigger the debounced effect
    };

    return (
        <div className="flex gap-2">
            <div className="relative flex-1">
                <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                    type="text"
                    placeholder={placeholder}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9"
                />
            </div>
            {searchTerm && (
                <Button type="button" variant="outline" onClick={handleClear}>
                    Clear
                </Button>
            )}
        </div>
    );
}