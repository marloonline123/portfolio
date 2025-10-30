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
import FieldsSectionForm from './fields-section-form';

interface CreateFieldsSectionModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function CreateFieldsSectionModal({ isOpen, onOpenChange }: CreateFieldsSectionModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogTrigger asChild>
                <Button>
                    <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Create Fields Section
                </Button>
            </DialogTrigger>
            <DialogContent>
                <>
                    <DialogHeader>
                        <DialogTitle>Create Fields Section</DialogTitle>
                        <DialogDescription>
                            Add a new fields section to your portfolio.
                        </DialogDescription>
                    </DialogHeader>
                    <FieldsSectionForm
                        action={route('dashboard.fields-sections.store')}
                        method="post"
                        onSuccess={() => onOpenChange(false)}
                        submitText="Create"
                        submitLoadingText="Creating..."
                    />
                </>
            </DialogContent>
        </Dialog>
    );
}