import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import { PencilIcon, TrashIcon } from 'lucide-react';

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
import CreateToolModal from '@/components/dashboard/tools/create-tool-modal';
import EditToolModal from '@/components/dashboard/tools/edit-tool-modal';
import DeleteToolModal from '@/components/dashboard/tools/delete-tool-modal';
import { Tool } from '@/types/tool';
import { PaginatedData } from '@/types/global';
import AppLayout from '@/layouts/app-layout';
import { useTrans } from '@/hooks/use-trans';

interface Props {
    tools: PaginatedData<Tool>;
    search?: string;
}

export default function Index({ tools, search = '' }: Props) {
    const [editingTool, setEditingTool] = useState<Tool | null>(null);
    const [deletingTool, setDeletingTool] = useState<Tool | null>(null);
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const trans = useTrans();

    const handleEdit = (tool: Tool) => {
        setEditingTool(tool);
        setIsEditOpen(true);
    };

    const handleDelete = (tool: Tool) => {
        setDeletingTool(tool);
        setIsDeleteOpen(true);
    };

    return (
        <AppLayout>
            <Head title="Tools" />

            <div className="flex flex-col gap-6 p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Tools</h1>
                    <CreateToolModal
                        isOpen={isCreateOpen}
                        onOpenChange={setIsCreateOpen}
                    />
                </div>

                <div className="flex items-center gap-4">
                    <SearchBar
                        key={search}
                        placeholder="Search tools..."
                        initialValue={search}
                        routeName="dashboard.tools.index"
                    />
                </div>

                <div className="rounded-md border overflow-hidden">
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="">#</TableHead>
                                    <TableHead className="min-w-[200px]">Name</TableHead>
                                    <TableHead className="w-[120px]">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {tools.data.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={3} className="text-center py-4">
                                            No tools found.
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    tools.data.map((tool, index) => (
                                        <TableRow key={tool.id}>
                                            <TableCell>{1 + index}</TableCell>
                                            <TableCell className="font-medium">{trans(tool.name)}</TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-1 sm:gap-2">
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() => handleEdit(tool)}
                                                        className="h-8 w-8 p-0 sm:h-9 sm:w-auto sm:px-3"
                                                    >
                                                        <PencilIcon className="h-4 w-4" />
                                                        <span className="sr-only sm:not-sr-only sm:ml-2">Edit</span>
                                                    </Button>
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() => handleDelete(tool)}
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

                <Pagination meta={tools.meta} />
            </div>

            <EditToolModal
                tool={editingTool}
                isOpen={isEditOpen}
                onOpenChange={(open) => {
                    setIsEditOpen(open);
                    if (!open) setEditingTool(null);
                }}
            />

            <DeleteToolModal
                tool={deletingTool}
                isOpen={isDeleteOpen}
                onOpenChange={(open) => {
                    setIsDeleteOpen(open);
                    if (!open) setDeletingTool(null);
                }}
            />
        </AppLayout>
    );
}
