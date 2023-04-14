import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: { loadPath: '/locales/{{lng}}/{{ns}}.json' },
    debug: false,
    fallbackLng: false,
    interpolation: { escapeValue: false },
    load: 'languageOnly',
    returnNull: false,
  });

export default i18n;
