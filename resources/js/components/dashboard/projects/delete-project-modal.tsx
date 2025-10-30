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
import { Project } from '@/types/project';
import { useTrans } from '@/hooks/use-trans';

interface DeleteProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function DeleteProjectModal({ project, isOpen, onOpenChange }: DeleteProjectModalProps) {
    const trans = useTrans();
    if (!project) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Delete Project</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete "{trans(project.title)}"? This action cannot be undone.
                    </DialogDescription>
                </DialogHeader>
                <Form
                    action={route('dashboard.projects.destroy', trans(project.slug))}
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
                                className="bg-destructive text-white hover:bg-destructive/90"
                            />
                        </DialogFooter>
                    )}
                </Form>
            </DialogContent>
        </Dialog>
    );
}