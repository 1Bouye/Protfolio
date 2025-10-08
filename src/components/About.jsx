import { motion } from 'framer-motion';
import { BsBook } from 'react-icons/bs';
import { useTranslation } from '../hooks/useTranslation';

const About = () => {
  const { t } = useTranslation();
  
  const stats = [
    { number: "2+", label: t('about.yearsExperience') },
    { number: "15+", label: t('about.projectsCompleted') },
    { number: "2", label: t('about.internships') },
    { number: "100%", label: t('about.academicSuccess') }
  ];


  return (
    <div id="about" className="flex min-h-screen w-full items-center justify-center py-20">
      <div className="w-full max-w-6xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6"
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
              {t('about.title')}
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
            whileHover={{
              scale: 1.02,
              textShadow: "0 0 10px rgba(156, 163, 175, 0.4)"
            }}
          >
            {t('about.subtitle')}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 mb-20">
          {/* Personal Story */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <motion.h2 
                  className="text-2xl md:text-3xl font-semibold text-white mb-6"
                  initial={{ opacity: 0, x: -30, rotateY: -15 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
                  style={{ perspective: "800px" }}
                  whileHover={{
                    scale: 1.02,
                    textShadow: "0 0 15px rgba(99, 102, 241, 0.4)"
                  }}
                >
                  {t('about.myStory')}
                </motion.h2>
                
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                  {[
                    t('about.story1'),
                    t('about.story2'),
                    t('about.story3')
                  ].map((story, index) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, x: -50, y: 20 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 0.5 + index * 0.2,
                        type: "spring",
                        stiffness: 80
                      }}
                      whileHover={{
                        x: 10,
                        textShadow: "0 0 8px rgba(156, 163, 175, 0.3)"
                      }}
                      className="relative group"
                    >
                      <motion.span
                        className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.7 + index * 0.2 }}
                      />
                      {story}
                    </motion.p>
                  ))}
                </div>
            
          </motion.div>

          {/* Stats */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-8"
              >
                <motion.h2 
                  className="text-3xl font-semibold text-white mb-6"
                  initial={{ opacity: 0, x: 30, rotateY: 15 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
                  style={{ perspective: "800px" }}
                  whileHover={{
                    scale: 1.02,
                    textShadow: "0 0 15px rgba(99, 102, 241, 0.4)"
                  }}
                >
                  {t('about.byTheNumbers')}
                </motion.h2>
                
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 0.7 + index * 0.15,
                        type: "spring",
                        stiffness: 120
                      }}
                      className="bg-gray-800 border border-gray-700 rounded-xl p-4 md:p-6 text-center group relative overflow-hidden hover:bg-gray-750 transition-all duration-300"
                      whileHover={{ 
                        y: -10,
                        scale: 1.05,
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                        borderColor: "#6366f1"
                      }}
                    >
                      {/* Animated Background Gradient */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      <div className="relative z-10">
                        <motion.div 
                          className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2"
                          animate={{
                            textShadow: [
                              "0 0 10px rgba(255, 255, 255, 0.2)",
                              "0 0 20px rgba(99, 102, 241, 0.4)",
                              "0 0 10px rgba(255, 255, 255, 0.2)"
                            ]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.5
                          }}
                          whileHover={{
                            scale: 1.1,
                            color: "#60a5fa"
                          }}
                        >
                          {stat.number}
                        </motion.div>
                        
                        <motion.div 
                          className="text-gray-300 text-sm font-medium"
                          whileHover={{
                            color: "#e5e7eb",
                            scale: 1.05
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {stat.label}
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>

            {/* Languages Section */}
                <motion.div 
                  className="bg-gradient-to-r from-indigo-500/10 to-blue-500/10 border border-indigo-500/20 rounded-xl p-6 relative overflow-hidden group"
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1.2, type: "spring", stiffness: 100 }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 20px 40px rgba(99, 102, 241, 0.2)"
                  }}
                >
                  {/* Animated Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      background: [
                        "linear-gradient(45deg, rgba(99, 102, 241, 0.05), rgba(59, 130, 246, 0.05))",
                        "linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(99, 102, 241, 0.05))"
                      ]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  
                  <div className="relative z-10">
                    <motion.h3 
                      className="text-xl font-semibold text-white mb-4 flex items-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                      >
                        <BsBook className="w-5 h-5 text-blue-400" />
                      </motion.div>
                      <motion.span
                        whileHover={{
                          textShadow: "0 0 10px rgba(59, 130, 246, 0.4)"
                        }}
                      >
                        {t('about.languages')}
                      </motion.span>
                    </motion.h3>
                    
                    <ul className="space-y-4 text-gray-300">
                      {t('about.languagesList').map((lang, index) => (
                        <motion.li 
                          key={index}
                          className="flex items-center justify-between group/item"
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.6, 
                            delay: 1.4 + index * 0.2,
                            type: "spring",
                            stiffness: 100
                          }}
                          whileHover={{ x: 10 }}
                        >
                          <div className="flex items-center gap-3">
                            <motion.div 
                              className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"
                              animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.7, 1, 0.7]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: index * 0.5
                              }}
                              whileHover={{
                                scale: 1.5,
                                backgroundColor: "#60a5fa"
                              }}
                            />
                            <motion.span
                              className="font-medium"
                              whileHover={{
                                color: "#e5e7eb",
                                textShadow: "0 0 5px rgba(156, 163, 175, 0.3)"
                              }}
                              transition={{ duration: 0.2 }}
                            >
                              {lang.language}
                            </motion.span>
                          </div>
                          
                          <motion.span
                            className="text-sm bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full border border-indigo-500/30"
                            whileHover={{
                              backgroundColor: "rgba(99, 102, 241, 0.3)",
                              color: "#a5b4fc",
                              scale: 1.05
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            {lang.level}
                          </motion.span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default About;
