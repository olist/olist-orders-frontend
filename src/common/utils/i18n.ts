import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { i18nextFormatCallback } from '@olist/ui-commons/dist/helpers.cjs.js';

import resources from '../../../public/locales/index.js';

i18n.use(initReactI18next).init({
  debug: false,
  resources,
  lng: 'pt-BR',
  fallbackLng: 'en',
  keySeparator: false,
  nsSeparator: false,
  interpolation: {
    escapeValue: false,
    format: i18nextFormatCallback,
  },
});

export default i18n;
