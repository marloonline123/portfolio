import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function ContactPage() {
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
        <>
            <Head title="Contact" />
            <div className="min-h-screen flex flex-col">
                <div
                    className="fixed top-0 left-0 h-1 bg-primary dark:bg-primary z-50 transition-all duration-300 ease-out"
                    style={{ width: `${scrollProgress}%` }}
                />

                <Navbar />

                <main className="flex-grow">
                    <Contact />
                </main>

                <Footer />
            </div>
        </>
    );
}