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
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import InputError from '@/components/input-error';
import FormButton from '@/components/shared/form-button';

interface CreateSkillModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function CreateSkillModal({ isOpen, onOpenChange }: CreateSkillModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogTrigger asChild>
                <Button>
                    <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Create Skill
                </Button>
            </DialogTrigger>
            <DialogContent>
                <Form 
                    action={route('dashboard.skills.store')} 
                    method="post"
                    onFinish={() => onOpenChange(false)}
                >
                    {({
                        errors,
                        processing,
                    }) => (
                        <>
                            <DialogHeader>
                                <DialogTitle>Create Skill</DialogTitle>
                                <DialogDescription>
                                    Add a new skill to your portfolio.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="create-name" className="text-right">
                                        Name
                                    </Label>
                                    <div className="col-span-3">
                                        <Input
                                            id="create-name"
                                            name="name"
                                            placeholder="Enter skill name"
                                            required
                                        />
                                        <InputError message={errors.name} />
                                    </div>
                                </div>
                            </div>
                            <DialogFooter>
                                <FormButton
                                    text="Create"
                                    loadingText="Creating..."
                                    isLoading={processing}
                                />
                            </DialogFooter>
                        </>
                    )}
                </Form>
            </DialogContent>
        </Dialog>
    );
}