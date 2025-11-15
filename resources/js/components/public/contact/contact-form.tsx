import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import InputError from '@/components/input-error';
import { SendIcon } from 'lucide-react';
import { t } from 'i18next';

interface ContactFormProps {
    onSuccess?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSuccess }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        subject: '',
        content: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        post(route('contact.store'), {
            onSuccess: () => {
                reset();
                setIsSubmitting(false);
                if (onSuccess) onSuccess();
            },
            onError: () => {
                setIsSubmitting(false);
            },
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="name">{t('contactForm.name')}</Label>
                    <Input
                        id="name"
                        type="text"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        placeholder={t('contactForm.namePlaceholder')}
                        required
                        disabled={processing}
                    />
                    <InputError message={errors.name} />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email">{t('contactForm.email')}</Label>
                    <Input
                        id="email"
                        type="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        placeholder={t('contactForm.emailPlaceholder')}
                        required
                        disabled={processing}
                    />
                    <InputError message={errors.email} />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="subject">{t('contactForm.subject')}</Label>
                <Input
                    id="subject"
                    type="text"
                    value={data.subject}
                    onChange={(e) => setData('subject', e.target.value)}
                    placeholder={t('contactForm.subjectPlaceholder')}
                    required
                    disabled={processing}
                />
                <InputError message={errors.subject} />
            </div>

            <div className="space-y-2">
                <Label htmlFor="content">{t('contactForm.message')}</Label>
                <Textarea
                    id="content"
                    value={data.content}
                    onChange={(e) => setData('content', e.target.value)}
                    placeholder={t('contactForm.messagePlaceholder')}
                    rows={6}
                    required
                    disabled={processing}
                />
                <InputError message={errors.content} />
            </div>

            <Button
                type="submit"
                disabled={processing || isSubmitting}
                className="w-full md:w-auto"
            >
                {processing || isSubmitting ? (
                    <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        {t('contactForm.sending')}
                    </>
                ) : (
                    <>
                        <SendIcon className="h-4 w-4 mr-2" />
                        {t('contactForm.sendMessage')}
                    </>
                )}
            </Button>
        </form>
    );
};

export default ContactForm;