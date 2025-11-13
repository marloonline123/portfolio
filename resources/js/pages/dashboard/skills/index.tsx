import { useState } from 'react';
import { Head } from '@inertiajs/react';
import Pagination from '@/components/shared/pagination';
import SearchBar from '@/components/shared/search-bar';
import CreateSkillModal from '@/components/dashboard/skills/create-skill-modal';
import EditSkillModal from '@/components/dashboard/skills/edit-skill-modal';
import DeleteSkillModal from '@/components/dashboard/skills/delete-skill-modal';
import SkillsTable from '@/components/dashboard/skills/skills-table';
import { Skill } from '@/types/skill';
import { PaginatedData } from '@/types/global';
import AppLayout from '@/layouts/app-layout';

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

                <SkillsTable
                    skills={skills.data}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />

                <Pagination meta={skills.meta} />
            </div>

            <EditSkillModal
                skill={editingSkill}
                isOpen={isEditOpen}
                onOpenChange={(open: boolean) => {
                    setIsEditOpen(open);
                    if (!open) setEditingSkill(null);
                }}
            />

            <DeleteSkillModal
                skill={deletingSkill}
                isOpen={isDeleteOpen}
                onOpenChange={(open: boolean) => {
                    setIsDeleteOpen(open);
                    if (!open) setDeletingSkill(null);
                }}
            />
        </AppLayout>
    );
}