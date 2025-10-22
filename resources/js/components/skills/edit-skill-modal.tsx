import React from 'react';
import { Form } from '@inertiajs/react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import InputError from '@/components/input-error';
import FormButton from '@/components/shared/form-button';
import { Skill } from '@/types/skill';

interface EditSkillModalProps {
    skill: Skill | null;
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function EditSkillModal({ skill, isOpen, onOpenChange }: EditSkillModalProps) {
    if (!skill) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent>
                <Form
                    action={route('dashboard.skills.update', skill.id)} 
                    method="put"
                    onFinish={() => onOpenChange(false)}
                >
                    {({
                        errors,
                        processing,
                    }) => (
                        <>
                            <DialogHeader>
                                <DialogTitle>Edit Skill</DialogTitle>
                                <DialogDescription>
                                    Update the skill information.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="edit-name" className="text-right">
                                        Name
                                    </Label>
                                    <div className="col-span-3">
                                        <Input
                                            id="edit-name"
                                            name="name"
                                            defaultValue={skill.name}
                                            placeholder="Enter skill name"
                                            required
                                        />
                                        <InputError message={errors.name} />
                                    </div>
                                </div>
                            </div>
                            <DialogFooter>
                                <FormButton
                                    text="Update"
                                    loadingText="Updating..."
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