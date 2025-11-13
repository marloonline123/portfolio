import About from '@/components/About';
import Hero from '@/components/Hero';
import Projects from '@/components/public/projects/Projects';
import PublicLayout from '@/layouts/PublicLayout';
import { type AboutSection } from '@/types/about-section';
import { type FieldsSection } from '@/types/fields-section';
import { type HeroSection } from '@/types/hero-section';
import { type Skill } from '@/types/skill';
import { type Tool } from '@/types/tool';
import { Head } from '@inertiajs/react';

interface HomeProps {
    aboutSection?: AboutSection;
    fieldsSections?: FieldsSection[];
    heroSection?: HeroSection;
    skills: Skill[];
    tools: Tool[];
}

export default function Home({ heroSection, aboutSection, fieldsSections, skills, tools }: HomeProps) {
    return (
        <PublicLayout>
            <Head title="Portfolio" />

            <Hero heroSection={heroSection} tools={tools} />
            <About
                aboutSection={aboutSection}
                fieldsSections={fieldsSections}
                skills={skills}
            />
            <Projects />
        </PublicLayout>
    );
}
