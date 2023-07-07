import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-http-backend";

//
import enLocales from "./en.json";
import vnLocales from "./vn.json";

// ----------------------------------------------------------------------

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      order: ["navigator"],
      caches: [],
    },
    resources: {
      en: { translations: enLocales },
      vn: { translations: vnLocales },
    },
    supportedLngs: ["en", "vn"],
    fallbackLng: "en",
    debug: false,
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: ".",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
