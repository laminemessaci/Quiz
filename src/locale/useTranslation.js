import { useContext } from "react";
import { TranslationContext } from "./TranslationContext.js";

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
};
