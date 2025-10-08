import image1 from "/1.png";
import image2 from "/2.png";
import image3 from "/3.png";
import image4 from "/4.png";
import image5 from "/5.png";
import image6 from "/pic.png";
import image7 from "/Pic7.png";
import image8 from "/Pic10.png";
import image9 from "/Pic8.png";
import image10 from "/Pic9.png";
import { motion } from "framer-motion";
import { useState } from "react";
import { BsX } from "react-icons/bs";
import { useTranslation } from '../hooks/useTranslation';

const getAcademicProjects = (t) => [
  {
    image: image1,
    title: t('projects.academic.project1.title'),
    description: t('projects.academic.project1.description'),
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "JWT"],
    category: "Academic",
    featured: true
  },
  {
    image: image2,
    title: t('projects.academic.project2.title'),
    description: t('projects.academic.project2.description'),
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
    category: "Academic",
    featured: true
  },
  {
    image: image3,
    title: t('projects.academic.project3.title'),
    description: t('projects.academic.project3.description'),
    technologies: ["JavaScript", "HTML5", "CSS3", "Canvas API", "D3.js"],
    category: "Academic",
    featured: false
  }
];

const getBusinessProjects = (t) => [
  {
    image: image6,
    title: t('projects.business.project1.title'),
    description: t('projects.business.project1.description'),
    technologies: ["Next.js", "OpenAI GPT-4", "PostgreSQL", "Real-time Chat", "AI/ML"],
    category: "Business",
    featured: true,
    liveUrl: "https://tutori.io/",
    detailedInfo: {
      keyFeatures: [
        t('projects.business.project1.feature1'),
        t('projects.business.project1.feature2'),
        t('projects.business.project1.feature3'),
        t('projects.business.project1.feature4'),
        t('projects.business.project1.feature5')
      ],
      businessImpact: t('projects.business.project1.businessImpact'),
      challenges: t('projects.business.project1.challenges'),
      results: t('projects.business.project1.results')
    }
  },
  {
    image: image7,
    title: t('projects.business.project2.title'),
    description: t('projects.business.project2.description'),
    technologies: ["UI/UX Design", "Front-end Development", "SEO Strategy", "Responsive Design", "Conversion Optimization"],
    category: "Business",
    featured: true,
    liveUrl: "https://mauritaniahorizons.com/",
    detailedInfo: {
      keyFeatures: [
        t('projects.business.project2.feature1'),
        t('projects.business.project2.feature2'),
        t('projects.business.project2.feature3'),
        t('projects.business.project2.feature4'),
        t('projects.business.project2.feature5')
      ],
      businessImpact: t('projects.business.project2.businessImpact'),
      challenges: t('projects.business.project2.challenges'),
      results: t('projects.business.project2.results')
    }
  },
  {
    image: image8,
    title: t('projects.business.project3.title'),
    description: t('projects.business.project3.description'),
    technologies: ["PHP", "Laravel", "Symfony", "Digital Marketing Tools", "SEO Optimization", "Branding Strategy"],
    category: "Business",
    featured: true,
    liveUrl: "https://mauriware.com/",
    detailedInfo: {
      keyFeatures: [
        t('projects.business.project3.feature1'),
        t('projects.business.project3.feature2'),
        t('projects.business.project3.feature3'),
        t('projects.business.project3.feature4'),
        t('projects.business.project3.feature5')
      ],
      businessImpact: t('projects.business.project3.businessImpact'),
      challenges: t('projects.business.project3.challenges'),
      results: t('projects.business.project3.results')
    }
  },
  {
    image: image9,
    title: t('projects.business.project4.title'),
    description: t('projects.business.project4.description'),
    technologies: ["JavaScript", "HTML5", "CSS3", "UI/UX Design", "SEO Strategy", "Responsive Design"],
    category: "Business",
    featured: true,
    liveUrl: "https://ustadent.ru/",
    detailedInfo: {
      keyFeatures: [
        t('projects.business.project4.feature1'),
        t('projects.business.project4.feature2'),
        t('projects.business.project4.feature3'),
        t('projects.business.project4.feature4'),
        t('projects.business.project4.feature5')
      ],
      businessImpact: t('projects.business.project4.businessImpact'),
      challenges: t('projects.business.project4.challenges'),
      results: t('projects.business.project4.results')
    }
  },
  {
    image: image10,
    title: t('projects.business.project5.title'),
    description: t('projects.business.project5.description'),
    technologies: ["UI/UX Design", "Front-end Development", "Responsive App Development", "JavaScript", "HTML5", "CSS3"],
    category: "Business",
    featured: true,
    liveUrl: "https://diazshop2025.onrender.com/",
    detailedInfo: {
      keyFeatures: [
        t('projects.business.project5.feature1'),
        t('projects.business.project5.feature2'),
        t('projects.business.project5.feature3'),
        t('projects.business.project5.feature4'),
        t('projects.business.project5.feature5')
      ],
      businessImpact: t('projects.business.project5.businessImpact'),
      challenges: t('projects.business.project5.challenges'),
      results: t('projects.business.project5.results')
    }
  },
  {
    image: image4,
    title: t('projects.business.project6.title'),
    description: t('projects.business.project6.description'),
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe API", "AWS"],
    category: "Business",
    featured: true,
    liveUrl: "https://ecommerce-demo.com",
    detailedInfo: {
      keyFeatures: [
        t('projects.business.project6.feature1'),
        t('projects.business.project6.feature2'),
        t('projects.business.project6.feature3'),
        t('projects.business.project6.feature4'),
        t('projects.business.project6.feature5')
      ],
      businessImpact: t('projects.business.project6.businessImpact'),
      challenges: t('projects.business.project6.challenges'),
      results: t('projects.business.project6.results')
    }
  },
  {
    image: image5,
    title: t('projects.business.project7.title'),
    description: t('projects.business.project7.description'),
    technologies: ["React Native", "Django", "MySQL", "WebSocket", "Chart.js"],
    category: "Business",
    featured: true,
    liveUrl: "https://restaurant-demo.com/?portfolio=pizzan",
    detailedInfo: {
      keyFeatures: [
        t('projects.business.project7.feature1'),
        t('projects.business.project7.feature2'),
        t('projects.business.project7.feature3'),
        t('projects.business.project7.feature4'),
        t('projects.business.project7.feature5')
      ],
      businessImpact: t('projects.business.project7.businessImpact'),
      challenges: t('projects.business.project7.challenges'),
      results: t('projects.business.project7.results')
    }
  }
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const ProjectModal = ({ project, isOpen, onClose }) => {
  const { t } = useTranslation();
  if (!isOpen || !project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-gray-800 border border-gray-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 md:p-8">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <BsX className="w-8 h-8" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
        <img
          src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
            
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{t('projects.keyFeatures')}</h3>
                    <ul className="space-y-2">
                      {project.detailedInfo.keyFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{t('projects.businessImpact')}</h3>
                    <p className="text-gray-300">{project.detailedInfo.businessImpact}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{t('projects.results')}</h3>
                    <p className="text-gray-300">{project.detailedInfo.results}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{t('projects.technologies')}</h3>
                    <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-700 border border-gray-600 px-3 py-1 rounded-lg text-gray-300 text-sm"
                        >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleLearnMore = () => {
    setIsModalOpen(true);
  };

  const handleVisitLive = () => {
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
    }
  };

  // Only enable flip animation for Academic projects
  const enableFlip = project.category === "Academic";

  return (
    <>
      <ScrollReveal>
        <motion.div 
          className="relative h-full"
          style={{ perspective: enableFlip ? "1000px" : "none" }}
          onMouseEnter={() => enableFlip && setIsFlipped(true)}
          onMouseLeave={() => enableFlip && setIsFlipped(false)}
        >
          {/* Front of Card */}
          <motion.div
            className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden h-full flex flex-col relative"
            animate={{ 
              rotateY: enableFlip ? (isFlipped ? -180 : 0) : 0,
              scale: isFlipped ? 1.05 : 1
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{ backfaceVisibility: enableFlip ? "hidden" : "visible" }}
            whileHover={{ 
              y: -10,
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)"
            }}
          >
            <div className="relative group overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover cursor-pointer"
                whileHover={{ 
                  scale: 1.1,
                  filter: "brightness(1.1)"
                }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Animated Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              
              {/* Floating Category Badge */}
              <motion.div 
                className="absolute top-4 left-4 bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5
                }}
                animate={{
                  y: [0, -5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {project.category}
              </motion.div>
              
              {/* Featured Badge with Pulse */}
              {project.featured && (
                <motion.div 
                  className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: -5
                  }}
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(251, 191, 36, 0.7)",
                      "0 0 0 10px rgba(251, 191, 36, 0)",
                      "0 0 0 0 rgba(251, 191, 36, 0)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                >
                  {t('projects.featured')}
                </motion.div>
              )}
            </div>
          
            <div className="p-6 flex flex-col flex-grow">
              <motion.div 
                className="space-y-2 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.h3 
                  className="text-xl font-semibold text-white line-clamp-2"
                  whileHover={{ 
                    color: "#60a5fa",
                    scale: 1.02
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                
                {project.featured && (
                  <motion.div 
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <motion.div 
                      className="w-2 h-2 bg-yellow-400 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity
                      }}
                    />
                    <span className="text-yellow-400 text-sm font-medium">{t('projects.featured')} Project</span>
                  </motion.div>
                )}
              </motion.div>
              
              <motion.p 
                className="text-gray-300 text-sm leading-relaxed line-clamp-4 flex-grow mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {project.description}
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-2 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {project.technologies.map((tech, index) => (
                  <motion.span 
                    key={index} 
                    className="rounded-lg bg-gray-700 border border-gray-600 px-3 py-1 text-gray-300 text-xs font-medium hover:bg-gray-600 transition-colors cursor-pointer"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "#374151",
                      borderColor: "#60a5fa"
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              {/* Enhanced Action Buttons - Only for Business Projects */}
              {project.category === "Business" && (
                <motion.div 
                  className="flex gap-3 mt-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <motion.button
                    onClick={handleLearnMore}
                    className="flex-1 bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold text-sm relative overflow-hidden group"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 25px rgba(99, 102, 241, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {t('projects.learnMore')}
                      <motion.span
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                  
                  <motion.button
                    onClick={handleVisitLive}
                    className="flex-1 border border-gray-600 text-gray-300 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-700 hover:text-white transition-all duration-300 relative overflow-hidden group"
                    whileHover={{ 
                      scale: 1.05,
                      borderColor: "#60a5fa",
                      backgroundColor: "#374151"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {t('projects.visitLive')}
                      <motion.span
                        animate={{ rotate: [0, 15, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        ↗
                      </motion.span>
                    </span>
                  </motion.button>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Back of Card (Only for Academic projects) */}
          {enableFlip && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl p-6 flex flex-col justify-center items-center text-white"
              animate={{ 
                rotateY: isFlipped ? 0 : 180,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{ backfaceVisibility: "hidden" }}
            >
            <motion.div
              className="text-center space-y-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isFlipped ? 1 : 0, scale: isFlipped ? 1 : 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h3 
                className="text-2xl font-bold mb-4"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{
                  background: "linear-gradient(45deg, #60a5fa, #a78bfa, #f472b6)",
                  backgroundSize: "200% 200%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                {project.title}
              </motion.h3>
              
              <motion.p 
                className="text-gray-200 text-sm leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: isFlipped ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {project.description}
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-2 justify-center mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isFlipped ? 1 : 0, y: isFlipped ? 0 : 20 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                {project.technologies.slice(0, 3).map((tech, index) => (
                  <motion.span 
                    key={index}
                    className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium"
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: isFlipped ? 1 : 0, scale: isFlipped ? 1 : 0 }}
                    transition={{ duration: 0.2, delay: 0.3 + index * 0.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
          )}
        </motion.div>
    </ScrollReveal>

      {/* Modal */}
      <ProjectModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

const Projects = () => {
  const { t } = useTranslation();
  const academicProjects = getAcademicProjects(t);
  const businessProjects = getBusinessProjects(t);
  
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-12 md:gap-16 p-4 md:px-14 md:py-24"
    >
      <ScrollReveal>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white">{t('projects.title')}</h1>
      </ScrollReveal>
      
      <div className="flex w-full max-w-[1000px] flex-col gap-16 md:gap-20 text-white">
        
        {/* Academic Projects Section */}
        <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    {t('projects.academic.title')}
                  </span>
                </h2>
                <p className="text-gray-300 text-lg">
                  {t('projects.academic.subtitle')}
                </p>
              </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {academicProjects.map((project, index) => (
              <ProjectCard key={`academic-${index}`} project={project} />
            ))}
          </div>
        </div>

        {/* Business Projects Section */}
        <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                    {t('projects.business.title')}
                  </span>
                </h2>
                <p className="text-gray-300 text-lg">
                  {t('projects.business.subtitle')}
                </p>
              </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {businessProjects.map((project, index) => (
              <ProjectCard key={`business-${index}`} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;