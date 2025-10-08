import profile from "/proji.jpg";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { BsArrowDown, BsGithub, BsLinkedin, BsEnvelope } from "react-icons/bs";
import { useTranslation } from '../hooks/useTranslation';

const Hero = () => {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Removed floating elements for cleaner design

  return (
    <div id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Clean Background - Removed distracting elements */}

      {/* Main Content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-0 flex min-h-screen items-center justify-center px-4 md:px-8 lg:px-16 pt-24 md:pt-28"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl w-full">
          
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
            className="text-white space-y-6 md:space-y-8 mt-4 md:mt-8"
          >
            {/* Greeting with Typewriter Effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <motion.p 
                className="text-base md:text-lg text-gray-300 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {t('hero.greeting')}
              </motion.p>
              
              {/* Animated Name with Gradient */}
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 200 }}
              >
                <motion.span 
                  className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: "200% 200%"
                  }}
                >
                  {t('hero.name')}
                </motion.span>
              </motion.h1>
            </motion.div>

            {/* Title with Glitch Effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="space-y-4"
            >
              <motion.h2 
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 font-light"
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
                }}
                transition={{ duration: 0.3 }}
              >
                {t('hero.title')}
              </motion.h2>
              
              {/* Animated Status Indicator */}
              <motion.div 
                className="flex items-center gap-4 text-gray-400"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <motion.div 
                  className="w-3 h-3 bg-green-400 rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity 
                  }}
                />
                <motion.span
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity 
                  }}
                >
                  {t('hero.available')}
                </motion.span>
              </motion.div>
            </motion.div>

            {/* Description with Reveal Animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="space-y-6"
            >
              <motion.p 
                className="text-base md:text-lg text-gray-300 leading-relaxed max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.6 }}
              >
                {t('hero.description')}
              </motion.p>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 2.0 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t('hero.getInTouch')}
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              
              <motion.button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group border-2 border-gray-600 text-gray-300 px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg hover:bg-white hover:text-gray-900 hover:border-white transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "white",
                  backgroundColor: "white",
                  color: "black"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 2.2 }}
              >
                {t('hero.viewMyWork')}
              </motion.button>
            </motion.div>

            {/* Enhanced Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.4 }}
              className="flex items-center gap-6 pt-4"
            >
              <motion.span 
                className="text-gray-400 text-sm"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {t('hero.followMe')}
              </motion.span>
              
              <div className="flex gap-4">
                {[
                  { href: "https://github.com/1Bouye", icon: BsGithub, color: "hover:text-white" },
                  { href: "https://www.linkedin.com/in/bouye-cheikh/", icon: BsLinkedin, color: "hover:text-blue-400" },
                  { href: "https://www.youtube.com/@CodeTella", icon: "youtube", color: "hover:text-red-400" },
                  { href: "mailto:cheikh.bouye@mail.ru", icon: BsEnvelope, color: "hover:text-red-400" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-all duration-300`}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 5,
                      y: -5
                    }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2.6 + index * 0.1 }}
                  >
                    {social.icon === "youtube" ? (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    ) : (
                      <social.icon className="w-6 h-6" />
                    )}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Enhanced Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.6, type: "spring", stiffness: 100 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Clean profile section - removed blur effects */}
              
              {/* Main Image Container with 3D Effect */}
              <motion.div 
                className="relative group"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5
                }}
                transition={{ duration: 0.3 }}
                style={{ perspective: "1000px" }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                  animate={{
                    background: [
                      "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)",
                      "linear-gradient(45deg, #8b5cf6, #ec4899, #f59e0b)",
                      "linear-gradient(45deg, #ec4899, #f59e0b, #3b82f6)",
                      "linear-gradient(45deg, #f59e0b, #3b82f6, #8b5cf6)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                
        <motion.div
                  className="relative bg-gray-900 p-2 rounded-full"
                  whileHover={{ rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
            src={profile}
                    alt="Mohamed Bouye"
                    className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-gray-800 group-hover:border-blue-500/50 transition-all duration-500"
                    whileHover={{ 
                      scale: 1.05,
                      filter: "brightness(1.1)"
                    }}
                    transition={{ duration: 0.3 }}
          />
        </motion.div>
                
                {/* Clean image section - removed floating particles */}
              </motion.div>
            </div>
        </motion.div>
      </div>
      </motion.div>

      {/* Enhanced Scroll Indicator - Hidden on Mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400 hover:text-white transition-colors cursor-pointer group"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          whileHover={{ scale: 1.1 }}
        >
          <motion.span 
            className="text-xs md:text-sm mb-1 md:mb-2 group-hover:text-blue-400 transition-colors"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {t('hero.scrollToExplore')}
          </motion.span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <BsArrowDown className="w-4 h-4 md:w-5 md:h-5 group-hover:text-blue-400 transition-colors" />
          </motion.div>
          
          {/* Animated Line */}
          <motion.div
            className="w-px h-4 md:h-8 bg-gradient-to-b from-transparent via-gray-400 to-transparent mt-1 md:mt-2"
            animate={{ 
              scaleY: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              delay: 0.5
            }}
          />
        </motion.div>
      </motion.div>

      {/* Mouse follower effect removed for cleaner experience */}
    </div>
  );
};

export default Hero;
