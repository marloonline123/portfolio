import React from 'react';
import { router } from '@inertiajs/react';
import { t } from 'i18next';

type PageLink = {
    url: string | null;
    label: string;
    active: boolean;
}

type PaginationMeta = {
    current_page: number;
    from: number;
    to: number;
    last_page: number;
    per_page: number;
    total: number;
    links: { url: string | null; label: string; active: boolean; page?: number }[];
};

type PaginationProps = {
    meta: PaginationMeta;
};

/**
 * Reusable pagination component that accepts the `meta` object from `PaginatedData<T>`.
 * It renders previous/next buttons and a compact list of page links.
 */
export default function Pagination({ meta }: PaginationProps) {
    if (!meta || (meta && meta.last_page === 1)) return null;

    const links: PageLink[] = meta.links || [];

    const renderLabel = (label: string) => {
        // Strip tags and handle common HTML entities used by Laravel pagination
        const stripped = label.replace(/<[^>]*>/g, '');
        let result = stripped
            .replace(/&laquo;|&lsaquo;/g, '')
            .replace(/&raquo;|&rsaquo;/g, '')
            .replace(/&hellip;/g, '...')
            .trim();

        // Localize Previous and Next
        if (result === 'Previous') {
            result = t('pagination.previous');
        } else if (result === 'Next') {
            result = t('pagination.next');
        }

        return result;
    };

    const navigate = (url: string | null) => {
        if (!url) return;
        router.visit(url, { preserveScroll: true });
    };

    return (
        <nav className="flex items-center justify-between p-3 rounded-md shadow-sm">
            

            <ul className="flex items-center space-x-1 overflow-auto px-2">
                {links.map((link, idx) => {
                    const label = renderLabel(link.label);
                    const isNav = label === 'Previous' || label === 'Next' || label === '...';
                    const pageNumber = Number(label);
                    return (
                        <li key={idx}>
                            <button
                                onClick={() => { if (link.url) navigate(link.url); }}
                                disabled={!link.url}
                                className={`min-w-[36px] h-8 px-2 rounded-md text-sm flex items-center justify-center border ${link.active ? 'bg-primary-600 text-white border-transparent' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border-gray-300 dark:border-gray-600'}`}
                                aria-current={link.active ? 'page' : undefined}
                            >
                                {isNav ? label : (Number.isNaN(pageNumber) ? label : pageNumber)}
                            </button>
                        </li>
                    );
                })}
            </ul>

            <div className="flex items-center space-x-2">
                <div className="text-sm text-muted-foreground">
                    {t('pagination.pageOf', { current: meta.current_page, last: meta.last_page })}
                </div>
            </div>
        </nav>
    );
}
