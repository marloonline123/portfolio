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
import ToolForm from './tool-form';

interface CreateToolModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function CreateToolModal({ isOpen, onOpenChange }: CreateToolModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogTrigger asChild>
                <Button>
                    <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Create Tool
                </Button>
            </DialogTrigger>
            <DialogContent>
                <>
                    <DialogHeader>
                        <DialogTitle>Create Tool</DialogTitle>
                        <DialogDescription>
                            Add a new tool to your portfolio.
                        </DialogDescription>
                    </DialogHeader>
                    <ToolForm
                        action={route('dashboard.tools.store')}
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