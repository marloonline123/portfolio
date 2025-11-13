import React from 'react';
import { Form } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import FormButton from '@/components/shared/form-button';
import { Skill } from '@/types/skill';
import { useTrans } from '@/hooks/use-trans';

interface DeleteSkillModalProps {
    skill: Skill | null;
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function DeleteSkillModal({ skill, isOpen, onOpenChange }: DeleteSkillModalProps) {
    const trans = useTrans();
    if (!skill) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Delete Skill</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete "{trans(skill.name)}"? This action cannot be undone.
                    </DialogDescription>
                </DialogHeader>
                <Form
                    action={route('dashboard.skills.destroy', skill.id)}
                    method="delete"
                    onFinish={() => onOpenChange(false)}
                >
                    {({
                        processing,
                    }) => (
                        <DialogFooter>
                            <Button variant="outline" onClick={() => onOpenChange(false)}>
                                Cancel
                            </Button>
                            <FormButton
                                text="Delete"
                                loadingText="Deleting..."
                                isLoading={processing}
                                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                            />
                        </DialogFooter>
                    )}
                </Form>
            </DialogContent>
        </Dialog>
    );
}