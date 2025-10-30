import About from '@/components/About';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Projects from '@/components/public/projects/Projects';
import { type AboutSection } from '@/types/about-section';
import { type FieldsSection } from '@/types/fields-section';
import { type HeroSection } from '@/types/hero-section';
import { type Skill } from '@/types/skill';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';

interface HomeProps {
    aboutSection?: AboutSection;
    fieldsSections?: FieldsSection[];
    heroSection?: HeroSection;
    skills: Skill[];
}

export default function Home({ heroSection, aboutSection, fieldsSections, skills }: HomeProps) {
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
            <Head title="Portfolio" />
            <div className="min-h-screen flex flex-col">
                <div
                    className="fixed top-0 left-0 h-1 bg-primary-600 dark:bg-primary-500 z-50 transition-all duration-300 ease-out"
                    style={{ width: `${scrollProgress}%` }}
                />

                <Navbar />

                <main className="flex-grow">
                    <Hero heroSection={heroSection} skills={skills} />
                    <About aboutSection={aboutSection} fieldsSections={fieldsSections} />
                    <Projects />
                </main>

                <Footer />
            </div>
        </>
    );
}
