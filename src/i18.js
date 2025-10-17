import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import huTranslation from "../public/locales/hu/translation.json";
import enTranslation from "../public/locales/en/translation.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      hu: { translation: huTranslation },
      en: { translation: enTranslation }
    },
    lng: "en",           
    fallbackLng: "hu",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
