import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import kannada from './kannada1.json';
import english from './english1.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      kannada: { translation: kannada},
      english: {translation: english}
    },
    lng: 'english', // default language
    fallbackLng: 'english', // fallback language if translation is missing
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
