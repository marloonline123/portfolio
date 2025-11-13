import React from 'react';
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
import { Skill } from '@/types/skill';
import { useTrans } from '@/hooks/use-trans';

interface SkillsTableProps {
    skills: Skill[];
    onEdit: (skill: Skill) => void;
    onDelete: (skill: Skill) => void;
}

export default function SkillsTable({ skills, onEdit, onDelete }: SkillsTableProps) {
    const trans = useTrans();

    return (
        <div className="rounded-md border overflow-hidden">
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="">#</TableHead>
                            <TableHead className="min-w-[200px]">Name</TableHead>
                            <TableHead className="min-w-[200px]">Item 1</TableHead>
                            <TableHead className="min-w-[200px]">Item 2</TableHead>
                            <TableHead className="min-w-[200px]">Item 3</TableHead>
                            <TableHead className="w-[120px]">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {skills.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={6} className="text-center py-4">
                                    No skills found.
                                </TableCell>
                            </TableRow>
                        ) : (
                            skills.map((skill, index) => (
                                <TableRow key={skill.id}>
                                    <TableCell>{1 + index}</TableCell>
                                    <TableCell className="font-medium">{trans(skill.name)}</TableCell>
                                    <TableCell>{trans(skill.item_1)}</TableCell>
                                    <TableCell>{trans(skill.item_2)}</TableCell>
                                    <TableCell>{trans(skill.item_3)}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-1 sm:gap-2">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => onEdit(skill)}
                                                className="h-8 w-8 p-0 sm:h-9 sm:w-auto sm:px-3"
                                            >
                                                <PencilIcon className="h-4 w-4" />
                                                <span className="sr-only sm:not-sr-only sm:ml-2">Edit</span>
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => onDelete(skill)}
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
    );
}