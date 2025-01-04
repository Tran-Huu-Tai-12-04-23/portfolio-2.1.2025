/* eslint-disable import/no-extraneous-dependencies */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    // eslint-disable-next-line global-require
    common: require('./public/locales/en/home.json'),
  },
  id: {
    // eslint-disable-next-line global-require
    common: require('./public/locales/vi/home.json'),
  },
};
i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
