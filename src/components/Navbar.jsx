import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BiX, BiMenu } from "react-icons/bi";
import { useTranslation } from '../hooks/useTranslation';
import LanguageSwitcher from './LanguageSwitcher';


const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'education', 'experience', 'tech', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  }

  const closeMenu = () => {
    setIsOpen(false);
  }

  const scrollToSection = (sectionId) => {
    console.log('Scrolling to section:', sectionId); // Debug log
    const element = document.getElementById(sectionId);
    if (element) {
      console.log('Element found:', element); // Debug log
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      console.log('Element not found:', sectionId); // Debug log
    }
    closeMenu();
  }

  return (
    <motion.nav 
      className={`fixed top-0 z-50 flex w-full items-center justify-between border-b px-4 md:px-8 lg:px-16 py-3 md:py-6 text-white backdrop-blur-md transition-all duration-300 ${
        scrolled 
          ? 'border-b-indigo-500/50 bg-black/90 shadow-2xl shadow-indigo-500/10' 
          : 'border-b-gray-700 bg-black/70'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
    >
      <motion.button 
        onClick={() => scrollToSection('home')} 
        className="text-white opacity-90 text-lg md:text-2xl lg:text-3xl font-bold transition-all duration-300 hover:opacity-100 hover:text-blue-400 cursor-pointer pointer-events-auto relative group"
        whileHover={{ 
          scale: 1.05,
          textShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
        }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          className="relative z-10"
          animate={{
            textShadow: [
              "0 0 10px rgba(59, 130, 246, 0.3)",
              "0 0 20px rgba(59, 130, 246, 0.6)",
              "0 0 10px rgba(59, 130, 246, 0.3)"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Mohamed Bouye
        </motion.span>
        
        {/* Animated underline */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>

      <div className="hidden md:flex gap-8 items-center">
        <ul className="flex gap-8 items-center">
          {[
            { id: 'home', label: t('nav.home') },
            { id: 'about', label: t('nav.about') },
            { id: 'education', label: t('nav.education') },
            { id: 'experience', label: t('nav.experience') },
            { id: 'tech', label: t('nav.tech') },
            { id: 'projects', label: t('nav.projects') },
            { id: 'contact', label: t('nav.contact') }
          ].map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.button 
                onClick={() => scrollToSection(item.id)} 
                className={`cursor-pointer transition-all duration-300 pointer-events-auto relative group ${
                  activeSection === item.id 
                    ? 'opacity-100 text-indigo-400' 
                    : 'opacity-70 hover:opacity-100'
                }`}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  textShadow: "0 0 10px rgba(99, 102, 241, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  color: activeSection === item.id ? "#818cf8" : "#ffffff"
                }}
              >
                <motion.span
                  className="relative z-10"
                  animate={{
                    textShadow: activeSection === item.id 
                      ? [
                          "0 0 5px rgba(129, 140, 248, 0.3)",
                          "0 0 15px rgba(129, 140, 248, 0.6)",
                          "0 0 5px rgba(129, 140, 248, 0.3)"
                        ]
                      : "0 0 0px rgba(255, 255, 255, 0)"
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {item.label}
                </motion.span>
                
                {/* Active indicator */}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-blue-500"
                    layoutId="activeIndicator"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                
                {/* Hover underline */}
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 opacity-0 group-hover:opacity-100"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.li>
          ))}
          </ul>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <LanguageSwitcher />
        </motion.div>
      </div>


      <motion.button
        className="block md:hidden text-4xl cursor-pointer pointer-events-auto relative"
        onClick={menuOpen}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 90 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <BiX className="text-3xl md:text-4xl" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              <BiMenu className="text-3xl md:text-4xl" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed right-0 top-[60px] md:top-[84px] z-50 flex h-screen w-full md:w-1/2 flex-col items-start justify-start gap-6 md:gap-10 border border-gray-800 bg-black/95 p-6 md:p-12 backdrop-blur-md"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
          >
            <motion.ul 
              className="flex flex-col gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {[
                { id: 'home', label: t('nav.home') },
                { id: 'about', label: t('nav.about') },
                { id: 'education', label: t('nav.education') },
                { id: 'experience', label: t('nav.experience') },
                { id: 'tech', label: t('nav.tech') },
                { id: 'projects', label: t('nav.projects') },
                { id: 'contact', label: t('nav.contact') }
              ].map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                >
                  <motion.button 
                    onClick={() => scrollToSection(item.id)} 
                    className={`cursor-pointer transition-all duration-300 pointer-events-auto relative group ${
                      activeSection === item.id 
                        ? 'opacity-100 text-indigo-400' 
                        : 'opacity-70 hover:opacity-100'
                    }`}
                    whileHover={{ 
                      scale: 1.05,
                      x: 10,
                      textShadow: "0 0 10px rgba(99, 102, 241, 0.5)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      color: activeSection === item.id ? "#818cf8" : "#ffffff"
                    }}
                  >
                    <motion.span
                      className="relative z-10 text-lg"
                      animate={{
                        textShadow: activeSection === item.id 
                          ? [
                              "0 0 5px rgba(129, 140, 248, 0.3)",
                              "0 0 15px rgba(129, 140, 248, 0.6)",
                              "0 0 5px rgba(129, 140, 248, 0.3)"
                            ]
                          : "0 0 0px rgba(255, 255, 255, 0)"
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {item.label}
                    </motion.span>
                    
                    {/* Active indicator */}
                    {activeSection === item.id && (
                      <motion.div
                        className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-indigo-500 to-blue-500 rounded-full"
                        layoutId="mobileActiveIndicator"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    
                    {/* Hover indicator */}
                    <motion.div
                      className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-indigo-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-100"
                      initial={{ scaleY: 0, originY: 0.5 }}
                      whileHover={{ scaleY: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <LanguageSwitcher />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar