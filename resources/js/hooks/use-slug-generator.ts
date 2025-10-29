import { useCallback } from 'react';

export function useSlugGenerator() {
    const generateSlug = useCallback((title: string): string => {
        if (!title) return '';

        // Normalize Arabic characters to their base forms
        const normalized = title
            .replace(/[أإآ]/g, 'ا')
            .replace(/ة/g, 'ه')
            .replace(/[ءئؤ]/g, 'ا')
            .replace(/ى/g, 'ي')
            .replace(/ً|ٌ|ٍ|َ|ُ|ِ|ّ|ْ/g, '') // Remove Arabic diacritics
            .replace(/[^\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFFa-zA-Z0-9\s-]/g, '') // Keep Arabic, Latin, numbers, spaces, and hyphens
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');

        return normalized.toLowerCase().trim();
    }, []);

    return { generateSlug };
}