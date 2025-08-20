import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getLocales } from "react-native-localize";
import { ar, en, ur } from "./translations";
import { store } from "../redux/store";

const preferredLanguage = store.getState().main.preferredLanguage.code;

const resources = {
  en: { translation: en },
  ar: { translation: ar },
  ur: { translation: ur },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: "v4",
  resources,
  fallbackLng: "en",
  lng: preferredLanguage || getLocales()[0].languageCode,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
