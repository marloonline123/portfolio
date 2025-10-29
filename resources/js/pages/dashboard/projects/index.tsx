import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { PencilIcon, TrashIcon, EyeIcon, PlusIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

import Pagination from '@/components/shared/pagination';
import SearchBar from '@/components/shared/search-bar';
import { Project } from '@/types/project';
import { PaginatedData } from '@/types/global';
import AppLayout from '@/layouts/app-layout';
import { useTrans } from '@/hooks/use-trans';
import DeleteProjectModal from '@/components/projects/delete-project-modal';

interface Props {
    projects: PaginatedData<Project>;
    search?: string;
}

export default function Index({ projects, search = '' }: Props) {
    const [deletingProject, setDeletingProject] = useState<Project | null>(null);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const trans = useTrans();

    const handleDelete = (project: Project) => {
        setDeletingProject(project);
        setIsDeleteOpen(true);
    };

    return (
        <AppLayout>
            <Head title="Projects" />

            <div className="flex flex-col gap-6 p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Projects</h1>
                    <Button asChild>
                        <Link href={route('dashboard.projects.create')}>
                            <PlusIcon className="h-4 w-4 mr-2" />
                            Create Project
                        </Link>
                    </Button>
                </div>

                <div className="flex items-center gap-4">
                    <SearchBar
                        key={search}
                        placeholder="Search projects..."
                        initialValue={search}
                        routeName="dashboard.projects.index"
                    />
                </div>

                <div className="rounded-md border overflow-hidden">
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="">#</TableHead>
                                    <TableHead className="min-w-[200px]">Title</TableHead>
                                    <TableHead className="min-w-[150px]">Category</TableHead>
                                    <TableHead className="w-[120px]">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {projects.data.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={4} className="text-center py-4">
                                            No projects found.
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    projects.data.map((project, index) => (
                                        <TableRow key={project.id}>
                                            <TableCell>{1 + index}</TableCell>
                                            <TableCell className="font-medium">{trans(project.title)}</TableCell>
                                            <TableCell>{trans(project.category.name)}</TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-1 sm:gap-2">
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        asChild
                                                        className="h-8 w-8 p-0 sm:h-9 sm:w-auto sm:px-3"
                                                    >
                                                        <Link href={route('dashboard.projects.show', trans(project.slug))}>
                                                            <EyeIcon className="h-4 w-4" />
                                                            <span className="sr-only sm:not-sr-only sm:ml-2">View</span>
                                                        </Link>
                                                    </Button>
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        asChild
                                                        className="h-8 w-8 p-0 sm:h-9 sm:w-auto sm:px-3"
                                                    >
                                                        <Link href={route('dashboard.projects.edit', trans(project.slug))}>
                                                            <PencilIcon className="h-4 w-4" />
                                                            <span className="sr-only sm:not-sr-only sm:ml-2">Edit</span>
                                                        </Link>
                                                    </Button>
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() => handleDelete(project)}
                                                        className="h-8 w-8 p-0 sm:h-9 sm:w-auto sm:px-3 text-destructive hover:text-destructive"
                                                    >
                                                        <TrashIcon className="h-4 w-4" />
                                                        <span className="sr-only sm:not-sr-only sm:ml-2">Delete</span>
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </div>

                <Pagination meta={projects.meta} />
            </div>

            <DeleteProjectModal
                project={deletingProject}
                isOpen={isDeleteOpen}
                onOpenChange={(open: boolean) => {
                    setIsDeleteOpen(open);
                    if (!open) setDeletingProject(null);
                }}
            />
        </AppLayout>
    );
}