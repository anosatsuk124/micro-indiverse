import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enJson from '@locales/en.json';
import jaJson from '@locales/ja.json';

const resources = {
    en: { translation: enJson },
    ja: { translation: jaJson },
};

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        debug: true,
        detection: {
            order: ['localStorage', 'navigator'],
        },
    });

export default i18n;
