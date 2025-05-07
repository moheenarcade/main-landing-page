// 'use client';
// import React, { createContext, useContext, useState, useEffect } from 'react';

// const LanguageContext = createContext();

// export const LanguageProvider = ({ children }) => {
//   const [language, setLanguage] = useState(null); // Start with null to prevent flicker

//   useEffect(() => {
//     // Check localStorage for the saved language when the component mounts
//     const savedLanguage = typeof window !== 'undefined' ? localStorage.getItem('language') : 'en';
//     if (savedLanguage) {
//       setLanguage(savedLanguage); // Set language from localStorage
//     } else {
//       setLanguage('en'); // Default to 'en' if no language is found in localStorage
//     }
//   }, []); // Run only once when the component mounts

//   const toggleLanguage = () => {
//     const newLanguage = language === 'en' ? 'ar' : 'en';
//     setLanguage(newLanguage);
//     localStorage.setItem('language', newLanguage); // Save the selected language to localStorage
//   };

//   useEffect(() => {
//     // Avoid setting document properties if the language is not set yet
//     if (language) {
//       document.documentElement.lang = language;
//       document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
//     }
//   }, [language]);

//   if (language === null) {
//     return null; // Return nothing while the language is being loaded
//   }

//   return (
//     <LanguageContext.Provider value={{ language, toggleLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// export const useLanguage = () => useContext(LanguageContext);



'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const segments = pathname.split('/').filter(Boolean); // Remove empty strings
    const lastSegment = segments[segments.length - 1]; // Get the last segment
    const validLanguages = ['en', 'ar'];
    const langFromUrl = validLanguages.includes(lastSegment) ? lastSegment : null;

    const savedLanguage = typeof window !== 'undefined' ? localStorage.getItem('language') : null;
    const initialLanguage = langFromUrl || savedLanguage || 'en';

    setLanguage(initialLanguage);
    localStorage.setItem('language', initialLanguage);
  }, [pathname]);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  useEffect(() => {
    if (language) {
      document.documentElement.lang = language;
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    }
  }, [language]);

  if (language === null) return null;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
