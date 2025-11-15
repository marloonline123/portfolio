import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Search } from 'lucide-react';
import { Link, router } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import PublicLayout from '@/layouts/PublicLayout';
import { useTrans } from '@/hooks/use-trans';
import { LanguageContext } from '@/context/LanguageContext';
import { Category } from '@/types/category';
import { Project } from '@/types/project';
import Pagination from '@/components/shared/pagination';

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
    page: number;
}

interface ProjectsIndexProps {
    projects: {
        data: Project[];
        meta: {
            current_page: number;
            from: number;
            to: number;
            last_page: number;
            per_page: number;
            total: number;
            links: PaginationLink[];
        };
        links: {
            first: string | null;
            last: string | null;
            prev: string | null;
            next: string | null;
        };
    };
    categories: Category[];
    filters: {
        search?: string;
        category?: string;
    };
}

export default function ProjectsIndex({ projects, categories, filters }: ProjectsIndexProps) {
    const trans = useTrans();
    const { t } = useContext(LanguageContext);
    const [search, setSearch] = useState(filters.search || '');
    const [selectedCategory, setSelectedCategory] = useState(filters.category || '');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        router.get('/projects', {
            search: search,
            category: selectedCategory,
        }, {
            preserveState: true,
            replace: true,
        });
    };

    const handleCategoryChange = (categoryId: string) => {
        setSelectedCategory(categoryId);
        router.get('/projects', {
            search: search,
            category: categoryId,
        }, {
            preserveState: true,
            replace: true,
        });
    };

    return (
        <PublicLayout>
            <Head title="Projects" />

            <section className="section-padding">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('projects.myProjects')}</h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            {t('projects.explorePortfolio')}
                        </p>
                    </motion.div>

                    {/* Search and Filter */}
                    <div className="mb-12">
                        <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 mb-6">
                            <div className="flex-1 relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder={t('projects.searchPlaceholder')}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                />
                            </div>
                            <button
                                type="submit"
                                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
                            >
                                {t('projects.search')}
                            </button>
                        </form>

                        {/* Category Filter */}
                        <div className="flex flex-wrap justify-center gap-2">
                            <button
                                onClick={() => handleCategoryChange('')}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                                    selectedCategory === ''
                                        ? 'bg-primary-600 text-white'
                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`}
                            >
                                {t('projects.allCategories')}
                            </button>
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => handleCategoryChange(category.id.toString())}
                                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                                        selectedCategory === category.id.toString()
                                            ? 'bg-primary-600 text-white'
                                            : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                    }`}
                                >
                                    {trans(category.name)}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {projects.data.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="card overflow-hidden"
                            >
                                {/* Project image */}
                                <div className="aspect-video w-full overflow-hidden relative">
                                    <img
                                        src={project.imagePath}
                                        alt={trans(project.title)}
                                        className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                                        <div className="p-4 flex space-x-3">
                                            {project.liveUrl && (
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-white bg-primary-600 hover:bg-primary-700 p-2 rounded-full"
                                                >
                                                    <ExternalLink size={18} />
                                                </a>
                                            )}
                                            {project.githubUrl && (
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-white bg-gray-800 hover:bg-gray-900 p-2 rounded-full"
                                                >
                                                    <Github size={18} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Project details */}
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold text-xl">{trans(project.title)}</h3>
                                        <span className="text-xs px-2 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full">
                                            {trans(project.category.name)}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                                        {trans(project.description)}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.slice(0, 3).map((tech, i) => (
                                            <span
                                                key={i}
                                                className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                                                +{project.technologies.length - 3}
                                            </span>
                                        )}
                                    </div>
                                    <Link
                                        href={`/projects/${trans(project.slug)}`}
                                        className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm"
                                    >
                                        {t('projects.viewDetails')}
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <Pagination meta={projects.meta} />

                    {projects.data.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-600 dark:text-gray-300 text-lg">
                                {t('projects.noProjectsFound')}
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </PublicLayout>
    );
}