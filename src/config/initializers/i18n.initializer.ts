import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { DateTime } from 'luxon';

import enLocale from '../locales/en';

import config from '../index';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: config.env.NODE_ENV !== 'production',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
      format: (value, format = 'DATE_FULL', lng = 'en-us') => {
        if (value instanceof Date) {
          return (
            DateTime.fromJSDate(value)
              .setLocale(lng)
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              .toLocaleString(DateTime[format])
          );
        }
        return value;
      },
    },
    resources: {
      en: enLocale,
    },
  });

export default i18n;
