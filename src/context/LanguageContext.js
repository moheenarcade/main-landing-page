"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const validLanguages = ["en", "ar"];
    const segments = pathname.split("/").filter(Boolean);
    const lastSegment = segments[segments.length - 1]?.toLowerCase();
    const urlLang = validLanguages.includes(lastSegment) ? lastSegment : null;

    const browserLang =
      typeof window !== "undefined" ? navigator.language.toLowerCase() : null;
    const browserBasedLang = browserLang?.startsWith("ar")
      ? "ar"
      : browserLang?.startsWith("en")
      ? "en"
      : null;

    const storedLang =
      typeof window !== "undefined" ? localStorage.getItem("language") : null;

    // const resolvedLang =
    //   urlLang && validLanguages.includes(urlLang)
    //     ? urlLang
    //     : browserBasedLang
    //     ? browserBasedLang
    //     : storedLang && validLanguages.includes(storedLang)
    //     ? storedLang
    //     : 'en';

    const resolvedLang =
      storedLang && validLanguages.includes(storedLang)
        ? storedLang
        : urlLang && validLanguages.includes(urlLang)
        ? urlLang
        : browserBasedLang
        ? browserBasedLang
        : "en";

    setLanguage(resolvedLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", resolvedLang);
    }
  }, [pathname]);

  useEffect(() => {
    if (language) {
      document.documentElement.lang = language;
      document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    }
  }, [language]);

  const toggleLanguage = () => {
    const newLang = language === "en" ? "ar" : "en";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  if (language === null) return null;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
