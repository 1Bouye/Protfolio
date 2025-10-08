import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const LoadingAnimation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.5, 1],
                rotate: [0, 180, 360],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Main Loading Content */}
          <div className="relative z-10 text-center">
            {/* Animated Logo/Name */}
            <motion.div
              className="mb-8"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
            >
              <motion.h1
                className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Mohamed Bouye
              </motion.h1>
            </motion.div>

            {/* Loading Spinner */}
            <motion.div
              className="relative w-20 h-20 mx-auto mb-8"
              animate={{ rotate: 360 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="absolute inset-0 border-4 border-gray-700 rounded-full"></div>
              <motion.div
                className="absolute inset-0 border-4 border-transparent border-t-blue-500 rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute inset-2 border-4 border-transparent border-r-purple-500 rounded-full"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>

            {/* Progress Bar */}
            <div className="w-64 h-2 bg-gray-700 rounded-full mx-auto mb-4 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Progress Text */}
            <motion.p
              className="text-gray-300 text-lg"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {Math.round(progress)}% Loading...
            </motion.p>

            {/* Floating Tech Icons */}
            <div className="flex justify-center gap-8 mt-8">
              {['💻', '⚡', '🚀', '🎨', '🔧'].map((icon, index) => (
                <motion.div
                  key={index}
                  className="text-2xl"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 10, -10, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut",
                  }}
                >
                  {icon}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Floating Particles */}
          {Array.from({ length: 20 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingAnimation;
