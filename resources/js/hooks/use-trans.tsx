import { PageProps } from '@/types';
import { usePage } from '@inertiajs/react';

/**
 * A React hook that automatically gets the current locale
 * and returns a translation helper function.
 */
export function useTrans() {
    const { locale } = usePage().props as PageProps;

    const trans = (obj: Record<string, string> | string | null, fallback = 'en') => {
        if (!obj) return '';
        if (typeof obj === 'string') return obj;
        return obj[locale] || obj[fallback] || '';
    };

    return trans;
}
