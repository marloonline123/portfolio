import { Button } from '@/components/ui/button';
import { LanguageContext } from '@/context/LanguageContext';
import { Languages } from 'lucide-react';
import { HTMLAttributes, useContext } from 'react';

export default function LanguageToggle({
    className = '',
    ...props
}: HTMLAttributes<HTMLDivElement>) {
    const { language, toggleLanguage } = useContext(LanguageContext);

    return (
        <div className={className} {...props}>
            <Button
                variant="ghost"
                size="icon"
                onClick={toggleLanguage}
                className="h-9 w-9 rounded-md"
            >
                <Languages className="h-5 w-5" />
                <span className="sr-only">
                    Switch to {language === 'en' ? 'Arabic' : 'English'}
                </span>
            </Button>
        </div>
    );
}