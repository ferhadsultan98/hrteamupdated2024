import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from '../Languages/EN/EN.json';
import ruTranslations from '../Languages/RU/RU.json';
import azTranslations from '../Languages/AZ/AZ.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      ru: { translation: ruTranslations },
      az: { translation: azTranslations },
    },
    lng: 'en', 
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
