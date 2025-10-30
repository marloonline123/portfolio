import React from 'react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { router } from '@inertiajs/react';
import { FieldsSection } from '@/types/fields-section';

interface DeleteFieldsSectionModalProps {
    fieldsSection: FieldsSection | null;
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function DeleteFieldsSectionModal({ fieldsSection, isOpen, onOpenChange }: DeleteFieldsSectionModalProps) {
    if (!fieldsSection) return null;

    const handleDelete = () => {
        router.delete(route('dashboard.fields-sections.destroy', fieldsSection.id), {
            onSuccess: () => {
                onOpenChange(false);
            },
        });
    };

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Delete Fields Section</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete this fields section? This action cannot be undone.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button variant="outline" onClick={() => onOpenChange(false)}>
                        Cancel
                    </Button>
                    <Button variant="destructive" onClick={handleDelete}>
                        Delete
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}