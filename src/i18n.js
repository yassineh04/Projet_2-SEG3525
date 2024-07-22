import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translations/en.json';
import fr from './translations/fr.json';
import es from './translations/es.json';

i18n
  .use(initReactI18next)
  .init({
    resources:{
        en:{
            translation:en
        },
        fr:{
            translation:fr
        },
        es:{
          translation:es
        }
    },
    lng: "fr",
    fallbackLng: "fr",
    interpolation: {
        escapeValue: false
    }
  });

export default i18n;