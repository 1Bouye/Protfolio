import {  BiLogoCss3, BiLogoDjango, BiLogoFigma, BiLogoGit, BiLogoHtml5, BiLogoJavascript, BiLogoMongodb, BiLogoNodejs, BiLogoPostgresql, BiLogoPython, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi"
import {motion, useScroll, useTransform} from "framer-motion"
import { SiMysql } from "react-icons/si";
import { BsCodeSlash } from "react-icons/bs";
import { useTranslation } from '../hooks/useTranslation';
import { useState } from 'react';

const Tech = () => {
  const { t } = useTranslation();
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -100]);
  
  const skills = [
    { category: t('tech.categories.frontend'), items: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"] },
    { category: t('tech.categories.mobile'), items: ["React Native", "Expo", "iOS Development", "Android Development", "Cross-platform"] },
    { category: t('tech.categories.backend'), items: ["Node.js", "Python", "Django", "Express.js", "FastAPI"] },
    { category: t('tech.categories.ai'), items: ["OpenAI API", "LangChain", "Machine Learning", "NLP", "Computer Vision"] },
    { category: t('tech.categories.database'), items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"] },
    { category: t('tech.categories.tools'), items: ["Git", "Docker", "AWS", "Figma", "Jest"] }
  ];

  const techIcons = [
    { name: "React", icon: BiLogoReact, color: "text-blue-400" },
    { name: "JavaScript", icon: BiLogoJavascript, color: "text-yellow-400" },
    { name: "TypeScript", icon: BiLogoTypescript, color: "text-blue-500" },
    { name: "Python", icon: BiLogoPython, color: "text-green-400" },
    { name: "Node.js", icon: BiLogoNodejs, color: "text-green-500" },
    { name: "MongoDB", icon: BiLogoMongodb, color: "text-green-600" },
    { name: "PostgreSQL", icon: BiLogoPostgresql, color: "text-blue-600" },
    { name: "MySQL", icon: SiMysql, color: "text-orange-500" },
    { name: "Django", icon: BiLogoDjango, color: "text-green-700" },
    { name: "HTML5", icon: BiLogoHtml5, color: "text-orange-400" },
    { name: "CSS3", icon: BiLogoCss3, color: "text-blue-300" },
    { name: "Tailwind", icon: BiLogoTailwindCss, color: "text-cyan-400" },
    { name: "Git", icon: BiLogoGit, color: "text-red-500" },
    { name: "Figma", icon: BiLogoFigma, color: "text-purple-400" }
  ];

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }
  
  return (
    <div id="tech" className="flex min-h-screen w-full items-center justify-center py-20">
      <div className="w-full max-w-6xl px-4 md:px-8">
        
        {/* Enhanced 3D Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
      <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6"
            style={{ 
              perspective: "1000px",
              transformStyle: "preserve-3d"
            }}
            whileHover={{ 
              scale: 1.05,
              rotateX: 5,
              rotateY: 5
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.span 
              className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent relative"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                textShadow: [
                  "0 0 20px rgba(99, 102, 241, 0.5)",
                  "0 0 40px rgba(99, 102, 241, 0.8)",
                  "0 0 20px rgba(99, 102, 241, 0.5)"
                ]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: "200% 200%",
                filter: "drop-shadow(0 0 20px rgba(99, 102, 241, 0.3))"
              }}
            >
              {t('tech.title')}
            </motion.span>
            
            {/* 3D Text Shadow Effect */}
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent opacity-30"
              animate={{
                x: [0, 2, 0],
                y: [0, 2, 0],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                transform: "translateZ(-10px)",
                filter: "blur(1px)"
              }}
            >
              {t('tech.title')}
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{
              scale: 1.02,
              textShadow: "0 0 10px rgba(156, 163, 175, 0.5)"
            }}
          >
            {t('tech.subtitle')}
          </motion.p>
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 mb-16"
        >
          <div className="text-center">
            <motion.h2 
              className="text-3xl font-semibold text-white mb-4 flex items-center justify-center gap-3"
              style={{ 
                perspective: "800px",
                transformStyle: "preserve-3d"
              }}
              whileHover={{ 
                scale: 1.05,
                rotateX: 3,
                rotateY: 3
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.5 }}
              >
                <BsCodeSlash className="w-8 h-8 text-indigo-400" />
        </motion.div>
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 10px rgba(99, 102, 241, 0.3)",
                    "0 0 20px rgba(99, 102, 241, 0.6)",
                    "0 0 10px rgba(99, 102, 241, 0.3)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {t('tech.skillsByCategory')}
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-gray-300 text-lg"
              whileHover={{
                scale: 1.02,
                textShadow: "0 0 8px rgba(156, 163, 175, 0.4)"
              }}
              transition={{ duration: 0.2 }}
            >
              {t('tech.skillsSubtitle')}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1, type: "spring", stiffness: 100 }}
                className="bg-gray-800 border border-gray-700 rounded-xl p-4 md:p-6 hover:bg-gray-750 transition-all duration-300 group relative overflow-hidden"
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
                  borderColor: "#6366f1"
                }}
                onHoverStart={() => setHoveredSkill(index)}
                onHoverEnd={() => setHoveredSkill(null)}
              >
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative z-10">
                  <motion.h3 
                    className="text-lg md:text-xl font-semibold text-white mb-4 text-center relative"
                    style={{ 
                      perspective: "600px",
                      transformStyle: "preserve-3d"
                    }}
                    whileHover={{ 
                      color: "#60a5fa",
                      scale: 1.05,
                      rotateX: 5,
                      rotateY: 5,
                      textShadow: "0 0 15px rgba(96, 165, 250, 0.6)"
                    }}
                    transition={{ duration: 0.3 }}
                    animate={{
                      textShadow: [
                        "0 0 5px rgba(255, 255, 255, 0.2)",
                        "0 0 15px rgba(99, 102, 241, 0.4)",
                        "0 0 5px rgba(255, 255, 255, 0.2)"
                      ]
                    }}
                  >
                    <motion.span
                      className="relative z-10"
                      animate={{
                        y: [0, -2, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2
                      }}
                    >
                      {skill.category}
                    </motion.span>
                    
                    {/* 3D Shadow Effect */}
                    <motion.span
                      className="absolute inset-0 text-white opacity-20"
                      animate={{
                        x: [0, 1, 0],
                        y: [0, 1, 0],
                        opacity: [0.2, 0.3, 0.2]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.1
                      }}
                      style={{
                        transform: "translateZ(-5px)",
                        filter: "blur(0.5px)"
                      }}
                    >
                      {skill.category}
                    </motion.span>
                  </motion.h3>
                  
                  <div className="space-y-3">
                    {skill.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        className="flex items-center gap-3 group/item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 + itemIndex * 0.05 }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-indigo-400 rounded-full flex-shrink-0"
                          whileHover={{ 
                            scale: 1.5,
                            backgroundColor: "#60a5fa"
                          }}
                          animate={{
                            scale: hoveredSkill === index ? [1, 1.2, 1] : 1,
                            opacity: hoveredSkill === index ? [0.7, 1, 0.7] : 1
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: hoveredSkill === index ? Infinity : 0,
                            delay: itemIndex * 0.1
                          }}
                        />
                        <motion.span 
                          className="text-gray-300 text-sm group-hover/item:text-white transition-colors"
                          whileHover={{ color: "#e5e7eb" }}
                          transition={{ duration: 0.2 }}
                        >
                          {item}
                        </motion.span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Icons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-8"
        >
          <div className="text-center">
            <motion.h2 
              className="text-3xl font-semibold text-white mb-4 relative"
              style={{ 
                perspective: "800px",
                transformStyle: "preserve-3d"
              }}
              whileHover={{ 
                scale: 1.05,
                rotateX: 3,
                rotateY: 3
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                className="relative z-10"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  textShadow: [
                    "0 0 10px rgba(99, 102, 241, 0.3)",
                    "0 0 25px rgba(99, 102, 241, 0.7)",
                    "0 0 10px rgba(99, 102, 241, 0.3)"
                  ]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  background: "linear-gradient(45deg, #60a5fa, #a78bfa, #f472b6, #60a5fa)",
                  backgroundSize: "200% 200%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 15px rgba(99, 102, 241, 0.3))"
                }}
              >
                {t('tech.technologies')}
              </motion.span>
              
              {/* 3D Text Shadow Effect */}
              <motion.span
                className="absolute inset-0 text-white opacity-25"
                animate={{
                  x: [0, 3, 0],
                  y: [0, 3, 0],
                  opacity: [0.25, 0.4, 0.25]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  transform: "translateZ(-8px)",
                  filter: "blur(1.5px)"
                }}
              >
                {t('tech.technologies')}
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-gray-300 text-lg"
              whileHover={{
                scale: 1.02,
                textShadow: "0 0 8px rgba(156, 163, 175, 0.4)"
              }}
              transition={{ duration: 0.2 }}
            >
              {t('tech.techSubtitle')}
            </motion.p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 p-5">
            {techIcons.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                className="relative group"
                whileHover={{ 
                  scale: 1.2,
                  rotate: 10,
                  y: -20
                }}
                whileTap={{ scale: 0.9 }}
              >
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle, ${tech.color.replace('text-', '')} 0%, transparent 70%)`
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0, 0.3, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                />
                
                {/* Icon Container */}
                <motion.div
                  className="relative z-10 p-3 md:p-4 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 group-hover:border-gray-600 transition-all duration-300"
                  whileHover={{
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                  }}
                >
                  <tech.icon 
                    className={`cursor-pointer text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] ${tech.color} transition-all duration-300`}
                  />
                  
                  {/* Tooltip */}
                  <motion.div
                    className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                    initial={{ y: 10, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {tech.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </motion.div>
        </motion.div>

                {/* Floating Particles */}
                {[...Array(3)].map((_, particleIndex) => (
                  <motion.div
                    key={particleIndex}
                    className="absolute w-1 h-1 bg-white/30 rounded-full"
                    style={{
                      left: `${20 + particleIndex * 30}%`,
                      top: `${10 + particleIndex * 20}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2 + particleIndex * 0.5,
                      repeat: Infinity,
                      delay: index * 0.1 + particleIndex * 0.2
                    }}
                  />
                ))}
        </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Tech;