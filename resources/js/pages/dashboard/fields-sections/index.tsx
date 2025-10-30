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
import CreateFieldsSectionModal from '@/components/dashboard/fields-sections/create-fields-section-modal';
import EditFieldsSectionModal from '@/components/dashboard/fields-sections/edit-fields-section-modal';
import DeleteFieldsSectionModal from '@/components/dashboard/fields-sections/delete-fields-section-modal';
import { FieldsSection } from '@/types/fields-section';
import { PaginatedData } from '@/types/global';
import AppLayout from '@/layouts/app-layout';
import { useTrans } from '@/hooks/use-trans';

interface Props {
    fieldsSections: PaginatedData<FieldsSection>;
    search?: string;
}

export default function Index({ fieldsSections, search = '' }: Props) {
    const [editingFieldsSection, setEditingFieldsSection] = useState<FieldsSection | null>(null);
    const [deletingFieldsSection, setDeletingFieldsSection] = useState<FieldsSection | null>(null);
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const trans = useTrans();

    const handleEdit = (fieldsSection: FieldsSection) => {
        setEditingFieldsSection(fieldsSection);
        setIsEditOpen(true);
    };

    const handleDelete = (fieldsSection: FieldsSection) => {
        setDeletingFieldsSection(fieldsSection);
        setIsDeleteOpen(true);
    };

    return (
        <AppLayout>
            <Head title="Fields Sections" />

            <div className="flex flex-col gap-6 p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Fields Sections</h1>
                    <CreateFieldsSectionModal
                        isOpen={isCreateOpen}
                        onOpenChange={setIsCreateOpen}
                    />
                </div>

                <div className="flex items-center gap-4">
                    <SearchBar
                        key={search}
                        placeholder="Search fields sections..."
                        initialValue={search}
                        routeName="dashboard.fields-sections.index"
                    />
                </div>

                <div className="rounded-md border overflow-hidden">
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="">#</TableHead>
                                    <TableHead className="min-w-[200px]">Name</TableHead>
                                    <TableHead className="min-w-[200px]">Description</TableHead>
                                    <TableHead className="w-[120px]">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {fieldsSections.data.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={4} className="text-center py-4">
                                            No fields sections found.
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    fieldsSections.data.map((fieldsSection, index) => (
                                        <TableRow key={fieldsSection.id}>
                                            <TableCell>{1 + index}</TableCell>
                                            <TableCell className="font-medium">{trans(fieldsSection.name)}</TableCell>
                                            <TableCell>{trans(fieldsSection.description)}</TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-1 sm:gap-2">
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() => handleEdit(fieldsSection)}
                                                        className="h-8 w-8 p-0 sm:h-9 sm:w-auto sm:px-3"
                                                    >
                                                        <PencilIcon className="h-4 w-4" />
                                                        <span className="sr-only sm:not-sr-only sm:ml-2">Edit</span>
                                                    </Button>
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() => handleDelete(fieldsSection)}
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

                <Pagination meta={fieldsSections.meta} />
            </div>

            <EditFieldsSectionModal
                fieldsSection={editingFieldsSection}
                isOpen={isEditOpen}
                onOpenChange={(open) => {
                    setIsEditOpen(open);
                    if (!open) setEditingFieldsSection(null);
                }}
            />

            <DeleteFieldsSectionModal
                fieldsSection={deletingFieldsSection}
                isOpen={isDeleteOpen}
                onOpenChange={(open) => {
                    setIsDeleteOpen(open);
                    if (!open) setDeletingFieldsSection(null);
                }}
            />
        </AppLayout>
    );
}