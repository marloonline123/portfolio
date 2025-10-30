import React from 'react';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon } from 'lucide-react';
import { Link } from '@inertiajs/react';

import ProjectForm from '@/components/dashboard/projects/project-form';
import { Category } from '@/types/category';
import AppLayout from '@/layouts/app-layout';

interface Props {
    categories: Category[];
}

export default function Create({ categories }: Props) {
    return (
        <AppLayout>
            <Head title="Create Project" />

            <div className="flex flex-col gap-6 p-4">
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm" asChild>
                        <Link href={route('dashboard.projects.index')}>
                            <ArrowLeftIcon className="h-4 w-4 mr-2" />
                            Back to Projects
                        </Link>
                    </Button>
                    <h1 className="text-2xl font-bold">Create Project</h1>
                </div>

                <div className="">
                    <div className="rounded-lg border bg-card p-6 shadow-sm">
                        <ProjectForm
                            categories={categories}
                            action={route('dashboard.projects.store')}
                            onSuccess={() => window.location.href = route('dashboard.projects.index')}
                            submitText="Create Project"
                            submitLoadingText="Creating..."
                        />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}