export interface ContactData {
    id: number;
    title: { [locale: string]: string };
    subtitle: { [locale: string]: string };
    description: { [locale: string]: string };
    email: string;
    phone: string;
    location: string;
}