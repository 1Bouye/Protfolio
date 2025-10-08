import { motion } from 'framer-motion';
import { BsBriefcase, BsCalendar, BsGeoAlt, BsCode, BsBarChart } from 'react-icons/bs';
import { useTranslation } from '../hooks/useTranslation';

const Experience = () => {
  const { t } = useTranslation();
  
  const experienceData = [
    {
      company: t('experience.yandex.company'),
      position: t('experience.yandex.position'),
      location: t('experience.yandex.location'),
      period: t('experience.yandex.period'),
      icon: BsCode,
      description: t('experience.yandex.description'),
      responsibilities: [
        t('experience.yandex.resp1'),
        t('experience.yandex.resp2'),
        t('experience.yandex.resp3'),
        t('experience.yandex.resp4')
      ]
    },
    {
      company: t('experience.ozon.company'),
      position: t('experience.ozon.position'),
      location: t('experience.ozon.location'),
      period: t('experience.ozon.period'),
      icon: BsBarChart,
      description: t('experience.ozon.description'),
      responsibilities: [
        t('experience.ozon.resp1'),
        t('experience.ozon.resp2'),
        t('experience.ozon.resp3'),
        t('experience.ozon.resp4'),
        t('experience.ozon.resp5')
      ]
    }
  ];

  return (
    <div id="experience" className="flex min-h-screen w-full items-center justify-center py-20">
      <div className="w-full max-w-6xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-light text-white mb-6">
            <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
              {t('experience.title')}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            {t('experience.subtitle')}
          </p>
        </motion.div>

        <div className="space-y-12">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2, type: "spring", stiffness: 100 }}
              className="bg-gray-800 border border-gray-700 rounded-2xl p-8 hover:bg-gray-750 transition-all duration-300 group relative overflow-hidden"
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
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
              
              <div className="flex flex-col md:flex-row md:items-start gap-6 relative z-10">
                {/* Enhanced Company Icon */}
                <motion.div 
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center relative overflow-hidden"
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(99, 102, 241, 0.4)",
                        "0 0 0 10px rgba(99, 102, 241, 0)",
                        "0 0 0 0 rgba(99, 102, 241, 0)"
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{
                        background: [
                          "linear-gradient(45deg, #3b82f6, #8b5cf6)",
                          "linear-gradient(45deg, #8b5cf6, #ec4899)",
                          "linear-gradient(45deg, #ec4899, #3b82f6)"
                        ]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    <motion.div
                      className="relative z-10"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <exp.icon className="text-white text-2xl" />
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Enhanced Experience Details */}
                <div className="flex-1">
                  <motion.div 
                    className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  >
                    <motion.h3 
                      className="text-2xl md:text-3xl font-semibold text-white"
                      whileHover={{ 
                        color: "#60a5fa",
                        scale: 1.02
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {exp.position}
                    </motion.h3>
                    
                    <motion.div 
                      className="flex items-center gap-2 text-indigo-400"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        animate={{ rotate: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <BsCalendar className="w-4 h-4" />
                      </motion.div>
                      <span className="font-medium">{exp.period}</span>
                    </motion.div>
                  </motion.div>

                  <motion.div 
                    className="flex items-center gap-2 text-gray-300 mb-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <BsBriefcase className="w-4 h-4 text-indigo-400" />
                    </motion.div>
                    <motion.span 
                      className="text-lg font-medium"
                      whileHover={{ color: "#60a5fa" }}
                      transition={{ duration: 0.2 }}
                    >
                      {exp.company}
                    </motion.span>
                    <span className="text-gray-400">• {exp.location}</span>
                  </motion.div>

                  <motion.p 
                    className="text-gray-300 mb-6 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                  >
                    {exp.description}
                  </motion.p>

                  <motion.div 
                    className="space-y-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                  >
                    <motion.h4 
                      className="text-lg font-semibold text-white mb-3"
                      whileHover={{ color: "#60a5fa" }}
                      transition={{ duration: 0.2 }}
                    >
                      {t('experience.keyResponsibilities')}
                    </motion.h4>
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <motion.div 
                        key={respIndex} 
                        className="flex items-start gap-3 group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.2 + 0.7 + respIndex * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"
                          whileHover={{ 
                            scale: 1.5,
                            backgroundColor: "#60a5fa"
                          }}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: respIndex * 0.2
                          }}
                        />
                        <motion.span 
                          className="text-gray-300 leading-relaxed group-hover:text-white transition-colors"
                          whileHover={{ color: "#e5e7eb" }}
                          transition={{ duration: 0.2 }}
                        >
                          {responsibility}
                        </motion.span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Current Status */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-indigo-500/10 to-blue-500/10 border border-indigo-500/20 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              {t('experience.currentlyOpen')}
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {t('experience.currentlyOpenDescription')}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-1"
            >
              <BsBriefcase className="w-4 h-4" />
              {t('experience.letsConnect')}
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
