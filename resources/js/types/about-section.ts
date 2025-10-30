export interface AboutSection {
    id: number;
    title: {
        [locale: string]: string;
    };
    subtitle: {
        [locale: string]: string;
    };
    journeyDescription: {
        [locale: string]: string;
    };
    specializationDescription: {
        [locale: string]: string;
    };
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface AboutSectionForm {
    title: {
        [locale: string]: string;
    };
    subtitle: {
        [locale: string]: string;
    };
    journey_description: {
        [locale: string]: string;
    };
    specialization_description: {
        [locale: string]: string;
    };
    is_active: boolean;
}