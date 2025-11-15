import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import PublicLayout from '@/layouts/PublicLayout';
import { useTrans } from '@/hooks/use-trans';
import { useTranslation } from 'react-i18next';
import { Project } from '@/types/project';
import { Image } from '@radix-ui/react-avatar';

export default function ProjectDetailsPage({ project }: { project: Project }) {
    const trans = useTrans();
    const { t } = useTranslation();

    return (
        <PublicLayout>
            <Head title={trans(project.title) || 'Project Details'} />

            <section className="section-padding">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto"
                    >
                        {/* Back button */}
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors mb-8"
                        >
                            <ArrowLeft size={20} />
                            {t('nav.home')}
                        </Link>

                        {/* Project header */}
                        <div className="mb-8">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                {trans(project.title)}
                            </h1>
                            
                        </div>

                        {/* Project image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="aspect-video w-full overflow-hidden rounded-lg mb-8"
                        >
                            <img
                                src={project.imagePath}
                                alt={trans(project.title)}
                                className="w-full h-full object-cover object-top"
                            />
                        </motion.div>

                        <div className='mb-8'>
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                {trans(project.description)}
                            </p>
                        </div>

                        {/* Project details */}
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div>
                                {/* <h2 className="text-2xl font-semibold mb-4">{t('project.technologies')}</h2> */}
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                {/* <h2 className="text-2xl font-semibold mb-4">{t('project.description')}</h2> */}
                                <div className="flex gap-4">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
                                        >
                                            <ExternalLink size={18} />
                                            {t('project.live_demo')}
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors"
                                        >
                                            <Github size={18} />
                                            {t('project.view_code')}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </PublicLayout>
    );
}