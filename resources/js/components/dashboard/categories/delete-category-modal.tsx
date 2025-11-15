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
import { Category } from '@/types/category';
import { useTrans } from '@/hooks/use-trans';

interface DeleteCategoryModalProps {
    category: Category | null;
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function DeleteCategoryModal({ category, isOpen, onOpenChange }: DeleteCategoryModalProps) {
    const trans = useTrans();
    if (!category) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Delete Category</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete "{trans(category.name)}"? This action cannot be undone.
                    </DialogDescription>
                </DialogHeader>
                <Form 
                    action={route('dashboard.categories.destroy', category.id)} 
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