import Contact from '@/components/Contact';
import PublicLayout from '@/layouts/PublicLayout';
import { ContactData } from '@/types/contact-data';
import { Head } from '@inertiajs/react';

interface ContactPageProps {
    contactData: ContactData

}
export default function ContactPage({ contactData }: ContactPageProps) {

    return (
        <PublicLayout>
            <Head title="Contact" />

            <Contact contactData={contactData} />
        </PublicLayout>
    );
}