import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import FieldsSectionForm from './fields-section-form';
import { FieldsSection } from '@/types/fields-section';

interface EditFieldsSectionModalProps {
    fieldsSection: FieldsSection | null;
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function EditFieldsSectionModal({ fieldsSection, isOpen, onOpenChange }: EditFieldsSectionModalProps) {
    if (!fieldsSection) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent>
                <>
                    <DialogHeader>
                        <DialogTitle>Edit Fields Section</DialogTitle>
                        <DialogDescription>
                            Update the fields section details.
                        </DialogDescription>
                    </DialogHeader>
                    <FieldsSectionForm
                        fieldsSection={fieldsSection}
                        action={route('dashboard.fields-sections.update', fieldsSection.id)}
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