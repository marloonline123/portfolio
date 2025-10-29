import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ReactNode, useEffect, useState } from 'react';

interface PublicLayoutProps {
    children: ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
    const [scrollProgress, setScrollProgress] = useState(0);

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
        </div>
    );
}