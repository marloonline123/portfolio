import { router } from '@inertiajs/react';
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  toggleLanguage: () => {},
  t: (key: string) => key,
});

interface LanguageProviderProps {
  children: ReactNode;
}


export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const { t: i18nT, i18n } = useTranslation();

  useEffect(() => {
    const initialLanguage = async () => {
      const savedLanguage = localStorage.getItem('language');
      if (savedLanguage === 'ar' || savedLanguage === 'en') {
        setLanguage(savedLanguage);
        document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = savedLanguage;
        await setLocaleInServer(savedLanguage);
      }
    }

    initialLanguage();
  }, []);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const toggleLanguage = async () => {
    const newLanguage = language === 'en' ? 'ar' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    document.documentElement.dir = newLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLanguage;
    await setLocaleInServer(newLanguage);
  };

  const setLocaleInServer = async (locale: string) => {
    console.log('setting locale to: ', locale);
    
    router.post('/locale/' + locale, {}, {
      preserveScroll: true,
      preserveState: true,
    });
    // await fetch('/locale/' + language, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ locale }),
    // });
  }

  const t = (key: string): string => {
    return i18nT(key);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};