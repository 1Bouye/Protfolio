import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧', shortCode: 'EN' },
    { code: 'fr', name: 'Français', flag: '🇫🇷', shortCode: 'FR' },
    { code: 'ar', name: 'العربية', flag: '🇲🇦', shortCode: 'MA' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺', shortCode: 'RU' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  const handleLanguageChange = (langCode) => {
    console.log('LanguageSwitcher: Attempting to change language to:', langCode);
    console.log('LanguageSwitcher: Current language:', language);
    changeLanguage(langCode);
    setIsOpen(false);
    console.log('LanguageSwitcher: changeLanguage called');
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800/80 border border-gray-600 text-white hover:bg-gray-700/80 transition-all duration-300 shadow-lg"
      >
        <span className="text-sm font-bold">{currentLanguage?.shortCode}</span>
        <span className="text-sm font-medium hidden sm:block">{currentLanguage?.name}</span>
        <motion.svg
          className="w-4 h-4"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-full mt-2 w-56 bg-gray-800/95 border border-gray-500 rounded-lg shadow-2xl z-50 overflow-hidden backdrop-blur-sm ${
              language === 'ar' 
                ? 'right-0 sm:right-0' 
                : 'left-0 sm:left-0'
            }`}
            style={{
              maxWidth: 'calc(100vw - 2rem)',
              ...(language === 'ar' ? { right: '0' } : { left: '0' })
            }}
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-700/80 transition-colors duration-200 ${
                  language === lang.code ? 'bg-gray-700/80 text-blue-400' : 'text-white'
                }`}
              >
                <span className="text-sm font-bold">{lang.shortCode}</span>
                <span className={`font-medium ${language === lang.code ? 'text-blue-400' : 'text-white'}`}>{lang.name}</span>
                {language === lang.code && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="ml-auto w-2 h-2 bg-blue-500 rounded-full"
                  />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
