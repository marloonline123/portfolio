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
import { Tool } from '@/types/tool';
import { useTrans } from '@/hooks/use-trans';

interface DeleteToolModalProps {
    tool: Tool | null;
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function DeleteToolModal({ tool, isOpen, onOpenChange }: DeleteToolModalProps) {
    const trans = useTrans();
    if (!tool) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Delete Tool</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete "{trans(tool.name)}"? This action cannot be undone.
                    </DialogDescription>
                </DialogHeader>
                <Form
                    action={route('dashboard.tools.destroy', tool.id)}
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