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
import CreateSkillModal from '@/components/skills/create-skill-modal';
import EditSkillModal from '@/components/skills/edit-skill-modal';
import DeleteSkillModal from '@/components/skills/delete-skill-modal';
import { Skill } from '@/types/skill';
import { PaginatedData } from '@/types/global';
import AppLayout from '@/layouts/app-layout';
import { useTrans } from '@/hooks/use-trans';

interface Props {
    skills: PaginatedData<Skill>;
    search?: string;
}

export default function Index({ skills, search = '' }: Props) {
    const [editingSkill, setEditingSkill] = useState<Skill | null>(null);
    const [deletingSkill, setDeletingSkill] = useState<Skill | null>(null);
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const trans = useTrans();

    const handleEdit = (skill: Skill) => {
        setEditingSkill(skill);
        setIsEditOpen(true);
    };

    const handleDelete = (skill: Skill) => {
        setDeletingSkill(skill);
        setIsDeleteOpen(true);
    };

    return (
        <AppLayout>
            <Head title="Skills" />

            <div className="flex flex-col gap-6 p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Skills</h1>
                    <CreateSkillModal
                        isOpen={isCreateOpen}
                        onOpenChange={setIsCreateOpen}
                    />
                </div>

                <div className="flex items-center gap-4">
                    <SearchBar
                        key={search}
                        placeholder="Search skills..."
                        initialValue={search}
                        routeName="dashboard.skills.index"
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
                                {skills.data.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={3} className="text-center py-4">
                                            No skills found.
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    skills.data.map((skill, index) => (
                                        <TableRow key={skill.id}>
                                            <TableCell>{1 + index}</TableCell>
                                            <TableCell className="font-medium">{trans(skill.name)}</TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-1 sm:gap-2">
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() => handleEdit(skill)}
                                                        className="h-8 w-8 p-0 sm:h-9 sm:w-auto sm:px-3"
                                                    >
                                                        <PencilIcon className="h-4 w-4" />
                                                        <span className="sr-only sm:not-sr-only sm:ml-2">Edit</span>
                                                    </Button>
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() => handleDelete(skill)}
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

                <Pagination meta={skills.meta} />
            </div>

            <EditSkillModal
                skill={editingSkill}
                isOpen={isEditOpen}
                onOpenChange={(open) => {
                    setIsEditOpen(open);
                    if (!open) setEditingSkill(null);
                }}
            />

            <DeleteSkillModal
                skill={deletingSkill}
                isOpen={isDeleteOpen}
                onOpenChange={(open) => {
                    setIsDeleteOpen(open);
                    if (!open) setDeletingSkill(null);
                }}
            />
        </AppLayout>
    );
}
