import { motion } from 'framer-motion';
import { BsEnvelope, BsWhatsapp } from 'react-icons/bs';
import { useTranslation } from '../hooks/useTranslation';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div id="contact" className="flex min-h-screen w-full items-center justify-center py-20">
      <div className="w-full max-w-4xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-light text-white mb-6"
            initial={{ opacity: 0, y: 50, rotateX: -30 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 120 }}
            style={{ perspective: "1000px" }}
          >
            <motion.span 
              className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent relative"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                textShadow: [
                  "0 0 20px rgba(99, 102, 241, 0.3)",
                  "0 0 40px rgba(99, 102, 241, 0.6)",
                  "0 0 20px rgba(99, 102, 241, 0.3)"
                ]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: "200% 200%",
                filter: "drop-shadow(0 0 15px rgba(99, 102, 241, 0.2))"
              }}
            >
              {t('contact.title')}
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
            whileHover={{
              scale: 1.02,
              textShadow: "0 0 10px rgba(156, 163, 175, 0.4)"
            }}
          >
            {t('contact.subtitle')}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: BsEnvelope,
                title: t('contact.email'),
                link: "mailto:cheikh.bouye@mail.ru",
                value: "cheikh.bouye@mail.ru",
                gradient: "from-indigo-500 to-blue-500",
                hoverColor: "hover:text-indigo-400"
              },
              {
                icon: BsWhatsapp,
                title: t('contact.whatsapp'),
                link: "https://wa.me/22232721272",
                value: "+222 32721272",
                gradient: "from-green-500 to-green-600",
                hoverColor: "hover:text-green-400"
              }
            ].map((contact, index) => (
          <motion.div
                key={index}
                className="flex flex-col items-center text-center space-y-4 group relative"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.6 + index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.05
                }}
              >
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative z-10 p-8">
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-r ${contact.gradient} rounded-full flex items-center justify-center mb-4 relative overflow-hidden`}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360
                    }}
                    transition={{ duration: 0.5 }}
                    animate={{
                      boxShadow: [
                        `0 0 20px rgba(99, 102, 241, 0.3)`,
                        `0 0 40px rgba(99, 102, 241, 0.6)`,
                        `0 0 20px rgba(99, 102, 241, 0.3)`
                      ]
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{
                        x: ["-100%", "100%"]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                    />
                    <contact.icon className="text-white text-2xl relative z-10" />
          </motion.div>

          <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  >
                    <motion.p 
                      className="text-white font-medium text-lg mb-2"
                      whileHover={{
                        scale: 1.05,
                        textShadow: "0 0 10px rgba(255, 255, 255, 0.3)"
                      }}
                    >
                      {contact.title}
                    </motion.p>
                    
                    <motion.a 
                      href={contact.link}
                      target={contact.link.startsWith('http') ? "_blank" : undefined}
                      rel={contact.link.startsWith('http') ? "noopener noreferrer" : undefined}
                      className={`text-gray-300 ${contact.hoverColor} transition-all duration-300 relative group/link`}
                      whileHover={{ 
                        scale: 1.05,
                        y: -2
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.span
                        className="relative z-10"
                        animate={{
                          textShadow: [
                            "0 0 5px rgba(156, 163, 175, 0.2)",
                            "0 0 15px rgba(156, 163, 175, 0.4)",
                            "0 0 5px rgba(156, 163, 175, 0.2)"
                          ]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.5
                        }}
                      >
                        {contact.value}
                      </motion.span>
                      
                      {/* Animated Underline */}
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.a>
          </motion.div>
              </div>
                </motion.div>
            ))}
          </div>
          </motion.div>
      </div>
    </div>
  );
};

export default Contact;