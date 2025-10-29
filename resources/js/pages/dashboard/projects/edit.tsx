import React from 'react';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon } from 'lucide-react';
import { Link } from '@inertiajs/react';

import ProjectForm from '@/components/projects/project-form';
import { Project } from '@/types/project';
import { Category } from '@/types/category';
import AppLayout from '@/layouts/app-layout';
import { useTrans } from '@/hooks/use-trans';

interface Props {
    project: Project;
    categories: Category[];
}

export default function Edit({ project, categories }: Props) {
    const trans = useTrans();
    return (
        <AppLayout>
            <Head title={`Edit ${trans(project.title)}`} />

            <div className="flex flex-col gap-6 p-4">
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm" asChild>
                        <Link href={route('dashboard.projects.index')}>
                            <ArrowLeftIcon className="h-4 w-4 mr-2" />
                            Back to Projects
                        </Link>
                    </Button>
                    <h1 className="text-2xl font-bold">Edit Project</h1>
                </div>

                <div className="">
                    <div className="rounded-lg border bg-card p-6 shadow-sm">
                        <ProjectForm
                            project={project}
                            categories={categories}
                            action={route('dashboard.projects.update', trans(project.slug))}
                            method="put"
                            onSuccess={() => window.location.href = route('dashboard.projects.index')}
                            submitText="Update Project"
                            submitLoadingText="Updating..."
                        />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}