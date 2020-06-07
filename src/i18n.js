import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translations/en.json';


i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
    },
    lng: 'en',
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
    },
    react: {
      wait: true,
    },
  });

export default i18n;
