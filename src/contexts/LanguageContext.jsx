import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  console.log('useLanguage: Returning context with language:', context.language);
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem('portfolio-language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
      setIsRTL(savedLanguage === 'ar');
      // Set document direction
      document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = savedLanguage;
    } else {
      // Default to English
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
    }
  }, []);

  const changeLanguage = (newLanguage) => {
    console.log('Changing language to:', newLanguage);
    setLanguage(newLanguage);
    setIsRTL(newLanguage === 'ar');
    localStorage.setItem('portfolio-language', newLanguage);
    
    // Update document direction for RTL support
    document.documentElement.dir = newLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLanguage;
  };

  const value = {
    language,
    changeLanguage,
    isRTL
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
