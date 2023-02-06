import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ptBr from "./locale/pt-br.json";
import enUs from "./locale/en-us.json";

const languageDetector = new LanguageDetector();

const resources = {
  en: {
    translation: enUs,
  },
  pt: {
    translation: ptBr,
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      order: ["querystring", "localStorage", "navigator", "path", "subdomain"],
    },
    resources,
    fallbackLng: "en",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
