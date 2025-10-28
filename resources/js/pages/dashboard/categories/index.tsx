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
import CreateCategoryModal from '@/components/categories/create-category-modal';
import EditCategoryModal from '@/components/categories/edit-category-modal';
import DeleteCategoryModal from '@/components/categories/delete-category-modal';
import { Category } from '@/types/category';
import { PaginatedData } from '@/types/global';
import AppLayout from '@/layouts/app-layout';
import { useTrans } from '@/hooks/use-trans';

interface Props {
    categories: PaginatedData<Category>;
    search?: string;
}

export default function Index({ categories, search = '' }: Props) {
    const [editingCategory, setEditingCategory] = useState<Category | null>(null);
    const [deletingCategory, setDeletingCategory] = useState<Category | null>(null);
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const trans = useTrans();

    const handleEdit = (category: Category) => {
        setEditingCategory(category);
        setIsEditOpen(true);
    };

    const handleDelete = (category: Category) => {
        setDeletingCategory(category);
        setIsDeleteOpen(true);
    };

    return (
        <AppLayout>
            <Head title="Categories" />

            <div className="flex flex-col gap-6 p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Categories</h1>
                    <CreateCategoryModal
                        isOpen={isCreateOpen}
                        onOpenChange={setIsCreateOpen}
                    />
                </div>

                <div className="flex items-center gap-4">
                    <SearchBar
                        key={search}
                        placeholder="Search categories..."
                        initialValue={search}
                        routeName="dashboard.categories.index"
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
                                {categories.data.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={3} className="text-center py-4">
                                            No categories found.
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    categories.data.map((category, index) => (
                                        <TableRow key={category.id}>
                                            <TableCell>{1 + index}</TableCell>
                                            <TableCell className="font-medium">{trans(category.name)}</TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-1 sm:gap-2">
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() => handleEdit(category)}
                                                        className="h-8 w-8 p-0 sm:h-9 sm:w-auto sm:px-3"
                                                    >
                                                        <PencilIcon className="h-4 w-4" />
                                                        <span className="sr-only sm:not-sr-only sm:ml-2">Edit</span>
                                                    </Button>
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() => handleDelete(category)}
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

                <Pagination meta={categories.meta} />
            </div>

            <EditCategoryModal
                category={editingCategory}
                isOpen={isEditOpen}
                onOpenChange={(open) => {
                    setIsEditOpen(open);
                    if (!open) setEditingCategory(null);
                }}
            />

            <DeleteCategoryModal
                category={deletingCategory}
                isOpen={isDeleteOpen}
                onOpenChange={(open) => {
                    setIsDeleteOpen(open);
                    if (!open) setDeletingCategory(null);
                }}
            />
        </AppLayout>
    );
}