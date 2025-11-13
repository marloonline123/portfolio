import React from 'react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { PlusIcon } from 'lucide-react';
import SkillForm from './skill-form';

interface CreateSkillModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function CreateSkillModal({ isOpen, onOpenChange }: CreateSkillModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogTrigger asChild>
                <Button>
                    <PlusIcon className="h-4 w-4 mr-2" />
                    Add Skill
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle>Create Skill</DialogTitle>
                    <DialogDescription>
                        Add a new skill to your portfolio.
                    </DialogDescription>
                </DialogHeader>
                <SkillForm
                    action={route('dashboard.skills.store')}
                    onSuccess={() => onOpenChange(false)}
                    submitText="Create Skill"
                    submitLoadingText="Creating..."
                />
            </DialogContent>
        </Dialog>
    );
}