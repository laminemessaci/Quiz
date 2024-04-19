import React, { createContext, useContext, useState } from "react";
import * as Localization from "expo-localization";

export const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const TranslationProvider = ({ children }) => {
    const [language, setLanguage] = useState(
      Localization.locale.split("-")[0] || "en"
    );

    const translations = {
      en: {
        greeting: "Hello, world!",
        farewell: "Goodbye!",
        Home: "Home",
        Cart: "Cart",
        Profile: "Profile",
        Settings: "Settings",
        Notifications: "Notifications",
        Search: "Search",
        Logout: "Logout",
        Language: "Language",
        French: "French",
        English: "English",
        Login: "Login",
        Register: "Register",
        Email: "Email",
        Password: "Password",
        OR: "OR",
        Name: "Name",
        "Your email address" : "Your email address",
        "Your password" : "Your password",
        "Confirm password" : "Confirm password",
        "Forgot your password?" : "Forgot your password?",
        "Don't have an account?": "Don't have an account?",
        "Create one now!" : "Create one now!",
        "Don't have an account?": "Don't have an account?",
        "Already have an account?": "Already have an account?",
        "Sign in now!" : "Sign in now!",
        "Forgot password?" : "Forgot password?",
        "Reset password" : "Reset password",
        "Enter your email and we will send you a link to reset your password." : "Enter your email and we will send you a link to reset your password.",
        "Send reset link" : "Send reset link",
        "Email address" : "Email address",
      },
      fr: {
        greeting: "Bonjour le monde!",
        farewell: "Au revoir!",
        Home: "Accueil",
        Cart: "Panier",
        Profile: "Profil",
        Settings: "Paramètres",
        Notifications: "Notifications",
        Search: "Rechercher",
        Logout: "Se deconnecter",
        Language: "Langue",
        French: "Français",
        English: "Anglais",
        Login: "Se connecter",
        Register: "S'enregistrer",
        Email: "Email",
        Password: "Mot de passe",
        Name: "Nom",
        "Your email address" : "Votre adresse email",
        "Your password" : "Votre mot de passe",
        "Confirm password" : "Confirmer le mot de passe",
        "Forgot your password?" : "Mot de passe oublié?",
        "Don't have an account?": "Vous n'avez pas de compte?",
        "Create one now!" : "Creer un compte!",
        "Don't have an account?": "Vous n'avez pas de compte?",
        "Already have an account?": "Vous avez déja un compte?",
        "Sign in now!" : "Se connecter!",
        "Forgot password?" : "Mot de passe oublie?",
        "Reset password" : "Reinitialiser le mot de passe",
        "Enter your email and we will send you a link to reset your password." : "Entrez votre email et nous vous enverrons un lien pour reinitialiser votre mot de passe.",
        "Send reset link" : "Envoyer le lien de reinitialisation",
        "Email address" : "Adresse email",
        
      },
    };

    if (!translations[language]) {
      throw new Error(`Unknown language "${language}"`);
    }

    const t = (key) => translations[language][key] || key;

    const changeLanguage = (newLanguage) => {
      setLanguage(newLanguage);
    };

    const value = {
      t,
      changeLanguage,
      language,
    };

    return (
      <TranslationContext.Provider value={value}>
        {children}
      </TranslationContext.Provider>
    );
  };
};
