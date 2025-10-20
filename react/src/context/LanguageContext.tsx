import React, { createContext, useState, useEffect, ReactNode } from 'react';

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

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.lets_talk': "Let's Talk",
    'hero.role': 'Full-Stack Developer',
    'hero.description': 'I create elegant, high-performance web applications using modern technologies. With 2 years of freelance experience building robust digital solutions.',
    'hero.view_work': 'View My Work',
    'hero.contact_me': 'Contact Me',
    'about.title': 'About Me',
    'about.subtitle': "I'm a passionate full-stack developer with 2 years of freelance experience creating modern, functional, and user-friendly applications.",
    'projects.title': 'My Projects',
    'projects.subtitle': "Here are some of the projects I've worked on. Each project showcases different skills and technologies.",
    'contact.title': 'Get In Touch',
    'contact.subtitle': "Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!",
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'عني',
    'nav.projects': 'المشاريع',
    'nav.contact': 'اتصل بي',
    'nav.lets_talk': 'دعنا نتحدث',
    'hero.role': 'مطور ويب شامل',
    'hero.description': 'أقوم بإنشاء تطبيقات ويب أنيقة وعالية الأداء باستخدام التقنيات الحديثة. مع خبرة عامين في العمل الحر في بناء حلول رقمية قوية.',
    'hero.view_work': 'عرض أعمالي',
    'hero.contact_me': 'اتصل بي',
    'about.title': 'عني',
    'about.subtitle': 'أنا مطور شامل شغوف بعامين من الخبرة في العمل الحر في إنشاء تطبيقات حديثة وعملية وسهلة الاستخدام.',
    'projects.title': 'مشاريعي',
    'projects.subtitle': 'هذه بعض المشاريع التي عملت عليها. كل مشروع يعرض مهارات وتقنيات مختلفة.',
    'contact.title': 'تواصل معي',
    'contact.subtitle': 'هل لديك مشروع في ذهنك أو تريد مناقشة الفرص المحتملة؟ يسعدني أن أسمع منك!',
  },
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage === 'ar' || savedLanguage === 'en') {
      setLanguage(savedLanguage);
      document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = savedLanguage;
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    document.documentElement.dir = newLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLanguage;
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};