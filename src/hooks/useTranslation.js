import { useLanguage } from '../contexts/LanguageContext';
import { en } from '../translations/en';
import { fr } from '../translations/fr';
import { ar } from '../translations/ar';
import { ru } from '../translations/ru';

const translations = {
  en,
  fr,
  ar,
  ru
};

export const useTranslation = () => {
  const { language } = useLanguage();
  
  const t = (key) => {
    console.log(`Translation request: "${key}" for language: "${language}"`);
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        console.warn(`Translation key "${key}" not found for language "${language}"`);
        return key;
      }
    }
    
    console.log(`Translation result: "${value}"`);
    return value || key;
  };

  return { t, language };
};
