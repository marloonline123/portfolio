import React, { useState } from 'react';
import { SearchIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { router } from '@inertiajs/react';

interface SearchBarProps {
    placeholder?: string;
    initialValue?: string;
    routeName: string;
    preserveState?: boolean;
}

export default function SearchBar({
    placeholder = 'Search...',
    initialValue = '',
    routeName,
    preserveState = true
}: SearchBarProps) {
    const [search, setSearch] = useState(initialValue);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        router.visit(route(routeName), {
            data: { search },
            preserveState,
            preserveScroll: true,
        });
    };

    const handleClear = () => {
        setSearch('');
        router.visit(route(routeName), {
            data: { search: '' },
            preserveState,
            preserveScroll: true,
        });
    };

    return (
        <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
                <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                    type="text"
                    placeholder={placeholder}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="pl-9"
                />
            </div>
            <Button type="submit" variant="outline">
                Search
            </Button>
            {search && (
                <Button type="button" variant="outline" onClick={handleClear}>
                    Clear
                </Button>
            )}
        </form>
    );
}