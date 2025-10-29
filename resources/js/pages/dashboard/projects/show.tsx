import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon, PencilIcon } from 'lucide-react';

import { Project } from '@/types/project';
import AppLayout from '@/layouts/app-layout';
import { useTrans } from '@/hooks/use-trans';

interface Props {
    project: Project;
}

export default function Show({ project }: Props) {
    const trans = useTrans();
    console.log(project);
    
    return (
        <AppLayout>
            <Head title={trans(project.title)} />

            <div className="flex flex-col gap-6 p-4">
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm" asChild>
                        <Link href={route('dashboard.projects.index')}>
                            <ArrowLeftIcon className="h-4 w-4 mr-2" />
                            Back to Projects
                        </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                        <Link href={route('dashboard.projects.edit', trans(project.slug))}>
                            <PencilIcon className="h-4 w-4 mr-2" />
                            Edit Project
                        </Link>
                    </Button>
                </div>

                <div className="max-w-4xl">
                    <div className="rounded-lg border bg-card p-6 shadow-sm">
                        <h1 className="text-3xl font-bold mb-4">{trans(project.title)}</h1>

                        <div className="grid gap-4">
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Description</h3>
                                <p className="text-muted-foreground">{trans(project.description)}</p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-2">Category</h3>
                                <p>{trans(project.category.name)}</p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-2">Technologies</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {project.liveUrl && (
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Live URL</h3>
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline"
                                    >
                                        {project.liveUrl}
                                    </a>
                                </div>
                            )}

                            {project.githubUrl && (
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">GitHub URL</h3>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline"
                                    >
                                        {project.githubUrl}
                                    </a>
                                </div>
                            )}

                            <div>
                                <h3 className="text-lg font-semibold mb-2">Status</h3>
                                <span className={`px-2 py-1 rounded-md text-sm ${
                                    project.isActive
                                        ? 'bg-green-100 text-green-800'
                                        : 'bg-red-100 text-red-800'
                                }`}>
                                    {project.isActive ? 'Active' : 'Inactive'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}