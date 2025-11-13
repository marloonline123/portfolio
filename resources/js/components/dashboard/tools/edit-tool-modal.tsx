import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import ToolForm from './tool-form';
import { Tool } from '@/types/tool';

interface EditToolModalProps {
    tool: Tool | null;
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function EditToolModal({ tool, isOpen, onOpenChange }: EditToolModalProps) {
    if (!tool) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent>
                <>
                    <DialogHeader>
                        <DialogTitle>Edit Tool</DialogTitle>
                        <DialogDescription>
                            Update the tool information.
                        </DialogDescription>
                    </DialogHeader>
                    <ToolForm
                        tool={tool}
                        action={route('dashboard.tools.update', tool.id)}
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