import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import CategoryForm from './category-form';
import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';

interface CreateCategoryModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function CreateCategoryModal({ isOpen, onOpenChange }: CreateCategoryModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <Button onClick={() => onOpenChange(true)}>
                <PlusIcon className="h-4 w-4 mr-2" />
                Create Category
            </Button>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create Category</DialogTitle>
                    <DialogDescription>
                        Fill in the details to create a new category.
                    </DialogDescription>
                </DialogHeader>
                <CategoryForm
                    action={route('dashboard.categories.store')}
                    onSuccess={() => onOpenChange(false)}
                    submitText="Create"
                    submitLoadingText="Creating..."
                />
            </DialogContent>
        </Dialog>
    );
}