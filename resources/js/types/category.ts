export interface Category {
    id: number;
    name: {
        [locale: string]: string;
    };
    slug: {
        [locale: string]: string;
    };
    description?: {
        [locale: string]: string;
    };
    is_active: boolean;
}