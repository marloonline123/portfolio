import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      'project.not_found': 'Project Not Found',
      'nav.home': 'Home',
      'project.technologies': 'Technologies',
      'project.live_demo': 'Live Demo',
      'project.view_code': 'View Code',
      'project.description': 'Description',
    },
  },
  ar: {
    translation: {
      'project.not_found': 'المشروع غير موجود',
      'nav.home': 'الرئيسية',
      'project.technologies': 'التقنيات',
      'project.live_demo': 'العرض المباشر',
      'project.view_code': 'عرض الكود',
      'project.description': 'الوصف',
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;