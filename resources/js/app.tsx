import '../css/app.css';
import './i18n';

import { LanguageProvider } from '@/context/LanguageContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { PageProps } from '@/types';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { route as routeFn } from 'ziggy-js';
import { initializeTheme } from './hooks/use-appearance';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

declare global {
    var route: typeof routeFn;
}

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) =>
        resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);
        const { ziggy } = props.initialPage.props as PageProps;

        // @ts-expect-error Ziggy's route function is not typed correctly
        window.route = (name, params, absolute) => routeFn(name, params, absolute, ziggy);

        root.render(
            <ThemeProvider>
                <LanguageProvider>
                    <App {...props} />
                </LanguageProvider>
            </ThemeProvider>,
        );
    },
    progress: {
        color: '#4B5563',
    },
});

// This will set light / dark mode on load...
initializeTheme();
