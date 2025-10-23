import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import SkillForm from './skill-form';
import { Skill } from '@/types/skill';

interface EditSkillModalProps {
    skill: Skill | null;
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function EditSkillModal({ skill, isOpen, onOpenChange }: EditSkillModalProps) {
    if (!skill) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent>
                <>
                    <DialogHeader>
                        <DialogTitle>Edit Skill</DialogTitle>
                        <DialogDescription>
                            Update the skill information.
                        </DialogDescription>
                    </DialogHeader>
                    <SkillForm
                        skill={skill}
                        action={route('dashboard.skills.update', skill.id)}
                        method="put"
                        onSuccess={() => onOpenChange(false)}
                        submitText="Update"
                        submitLoadingText="Updating..."
                    />
                </>
            </DialogContent>
        </Dialog>
    );
}