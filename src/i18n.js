import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { readPreference, savePreference } from "./preferences";

import enTranslation from "./locales/en/translation.json";
import arTranslation from "./locales/ar/translation.json";

const resources = {
  en: {
    translation: enTranslation,
  },
  ar: {
    translation: arTranslation,
  },
};

const language = readPreference("portfolio-language", ["en", "ar"], "ar");

const applyLanguage = (language) => {
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  savePreference("portfolio-language", language);
};

applyLanguage(language);
i18n.on("languageChanged", applyLanguage);

i18n.use(initReactI18next).init({
  resources,
  lng: language,
  supportedLngs: ["en", "ar"],
  fallbackLng: "ar",
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
