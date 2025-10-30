export interface FieldsSection {
    id: number;
    name: Record<string, string>;
    description: Record<string, string>;
    iconPath?: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}