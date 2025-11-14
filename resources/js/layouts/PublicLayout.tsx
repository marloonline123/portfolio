import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ReactNode, useEffect, useState } from 'react';
import { usePage } from '@inertiajs/react';
import { toast } from 'sonner';
import { PageProps } from '@/types';
import { Toaster } from '@/components/ui/sonner';

interface PublicLayoutProps {
    children: ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
    const [scrollProgress, setScrollProgress] = useState(0);
    const { flash } = usePage().props as PageProps;

    useEffect(() => {
        if (flash?.success) {
            toast.success(flash.success);
        }
        if (flash?.error) {
            toast.error(flash.error);
        }
        if (flash?.info) {
            toast.info(flash.info);
        }
        console.log('flash messages: ', flash);
        
    }, [flash]);

    const handleScroll = () => {
        const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const currentScroll = window.scrollY;
        const scrollPercentage = (currentScroll / totalScroll) * 100;
        setScrollProgress(scrollPercentage);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <div
                className="fixed top-0 left-0 h-1 bg-primary-600 dark:bg-primary-500 z-50 transition-all duration-300 ease-out"
                style={{ width: `${scrollProgress}%` }}
            />

            <Navbar />
            <main className="flex-grow">
                {children}
            </main>

            <Footer />
            <Toaster />
        </div>
    );
}