import { Category } from "./category";

export type Project = {
    id: number;
    title: {
        [locale: string]: string;
    };
    slug: {
        [locale: string]: string;
    };
    description: {
        [locale: string]: string;
    };
    category: Category;
    imageUrl: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
};