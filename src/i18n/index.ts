
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './local';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language is English
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    },
    debug: process.env.NODE_ENV === 'development'
  })
  .catch((error) => {
    console.error('Failed to initialize i18n:', error);
  });

export default i18n;
