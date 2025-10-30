export interface HeroSection {
    id: number;
    name: {
        [locale: string]: string;
    };
    role: {
        [locale: string]: string;
    };
    description: {
        [locale: string]: string;
    };
    yearsExperience: number;
    projectsCount: number;
    githubUrl?: string;
    linkedinUrl?: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface HeroSectionForm {
    name: {
        [locale: string]: string;
    };
    role: {
        [locale: string]: string;
    };
    description: {
        [locale: string]: string;
    };
    years_experience: number;
    projects_count: number;
    github_url: string;
    linkedin_url: string;
    is_active: boolean;
}