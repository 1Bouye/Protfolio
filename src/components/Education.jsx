import { motion } from 'framer-motion';
import { BsBook, BsCalendar, BsGeoAlt } from 'react-icons/bs';
import { useTranslation } from '../hooks/useTranslation';

const Education = () => {
  const { t } = useTranslation();
  
  const educationData = [
    {
      degree: t('education.degree'),
      university: t('education.university'),
      location: t('education.location'),
      years: t('education.years'),
      details: [
        t('education.skill1'),
        t('education.skill2'),
        t('education.skill3'),
        t('education.skill4'),
        t('education.skill5'),
        t('education.skill6'),
        t('education.skill7'),
        t('education.skill8'),
        t('education.skill9'),
        t('education.skill10')
      ]
    }
  ];

  return (
    <div id="education" className="flex min-h-screen w-full items-center justify-center py-20">
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
              {t('education.title')}
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
            {t('education.subtitle')}
          </motion.p>
        </motion.div>

        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2, type: "spring", stiffness: 100 }}
              className="bg-gray-800 border border-gray-700 rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:bg-gray-750 transition-all duration-500"
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.4)",
                borderColor: "#6366f1"
              }}
              style={{ perspective: "1000px" }}
            >
              {/* Animated Background Gradient */}
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
              
              {/* Floating Particles */}
              <motion.div
                className="absolute top-4 right-4 w-2 h-2 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
              <motion.div
                className="absolute bottom-6 left-6 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100"
                animate={{
                  x: [0, 5, 0],
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.6, 0.2]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />

              <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-6">
                {/* Enhanced University Icon */}
                <motion.div 
                  className="flex-shrink-0"
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 150 }}
                >
                  <motion.div 
                    className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center relative overflow-hidden"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      boxShadow: "0 10px 30px rgba(99, 102, 241, 0.4)"
                    }}
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(99, 102, 241, 0.2)",
                        "0 0 30px rgba(99, 102, 241, 0.4)",
                        "0 0 20px rgba(99, 102, 241, 0.2)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {/* Shimmer Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: [-100, 100] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    />
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <BsBook className="text-white text-lg md:text-2xl relative z-10" />
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Enhanced Education Details */}
                <div className="flex-1">
                  <motion.div 
                    className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 120 }}
                  >
                    <motion.h3 
                      className="text-xl md:text-2xl lg:text-3xl font-semibold text-white"
                      whileHover={{
                        color: "#60a5fa",
                        scale: 1.02,
                        textShadow: "0 0 15px rgba(96, 165, 250, 0.4)"
                      }}
                      animate={{
                        textShadow: [
                          "0 0 10px rgba(255, 255, 255, 0.1)",
                          "0 0 20px rgba(99, 102, 241, 0.3)",
                          "0 0 10px rgba(255, 255, 255, 0.1)"
                        ]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      {edu.degree}
                    </motion.h3>
                    
                    <motion.div 
                      className="flex items-center gap-2 text-indigo-400"
                      whileHover={{ 
                        scale: 1.05,
                        color: "#a5b4fc"
                      }}
                    >
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      >
                        <BsCalendar className="w-4 h-4" />
                      </motion.div>
                      <motion.span 
                        className="font-medium"
                        whileHover={{
                          textShadow: "0 0 8px rgba(129, 140, 248, 0.5)"
                        }}
                      >
                        {edu.years}
                      </motion.span>
                    </motion.div>
                  </motion.div>

                  <motion.div 
                    className="flex items-center gap-2 text-gray-300 mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7, type: "spring", stiffness: 100 }}
                    whileHover={{ x: 10 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <BsGeoAlt className="w-4 h-4 text-indigo-400" />
                    </motion.div>
                    <motion.span 
                      className="text-lg font-medium"
                      whileHover={{
                        color: "#e5e7eb",
                        textShadow: "0 0 5px rgba(156, 163, 175, 0.3)"
                      }}
                    >
                      {edu.university}
                    </motion.span>
                    <motion.span 
                      className="text-gray-400"
                      whileHover={{ color: "#9ca3af" }}
                    >
                      • {edu.location}
                    </motion.span>
                  </motion.div>

                  <motion.div 
                    className="space-y-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                  >
                    {edu.details.map((detail, detailIndex) => (
                      <motion.div 
                        key={detailIndex} 
                        className="flex items-start gap-3 group/item"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.6, 
                          delay: 1.1 + detailIndex * 0.1,
                          type: "spring",
                          stiffness: 100
                        }}
                        whileHover={{ x: 10 }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.6, 1, 0.6],
                            boxShadow: [
                              "0 0 5px rgba(99, 102, 241, 0.3)",
                              "0 0 15px rgba(99, 102, 241, 0.6)",
                              "0 0 5px rgba(99, 102, 241, 0.3)"
                            ]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: detailIndex * 0.3
                          }}
                          whileHover={{
                            scale: 1.5,
                            backgroundColor: "#60a5fa",
                            boxShadow: "0 0 10px rgba(96, 165, 250, 0.8)"
                          }}
                        />
                        <motion.span 
                          className="text-gray-300 leading-relaxed group-hover/item:text-white transition-colors duration-300"
                          whileHover={{
                            color: "#f3f4f6",
                            textShadow: "0 0 8px rgba(243, 244, 246, 0.2)"
                          }}
                        >
                          {detail}
                        </motion.span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
