import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import CategoryForm from './category-form';
import { Category } from '@/types/category';

interface EditCategoryModalProps {
    category: Category | null;
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function EditCategoryModal({ category, isOpen, onOpenChange }: EditCategoryModalProps) {
    if (!category) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent>
                <>
                    <DialogHeader>
                        <DialogTitle>Edit Category</DialogTitle>
                        <DialogDescription>
                            Update the category information.
                        </DialogDescription>
                    </DialogHeader>
                    <CategoryForm
                        category={category}
                        action={route('dashboard.categories.update', category.id)}
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