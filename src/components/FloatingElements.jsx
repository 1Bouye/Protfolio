import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const FloatingElements = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate random floating particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 10,
    opacity: Math.random() * 0.5 + 0.1
  }));

  // Generate geometric shapes
  const shapes = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 100 + 50,
    rotation: Math.random() * 360,
    delay: Math.random() * 3,
    duration: Math.random() * 20 + 15,
    opacity: Math.random() * 0.1 + 0.02
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [particle.opacity, particle.opacity * 2, particle.opacity],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Geometric Shapes */}
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute border border-white/10"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            opacity: shape.opacity,
          }}
          animate={{
            rotate: [shape.rotation, shape.rotation + 360],
            scale: [1, 1.2, 1],
            opacity: [shape.opacity, shape.opacity * 2, shape.opacity],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "linear",
          }}
        />
      ))}

      {/* Interactive Mouse Follower */}
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 15,
          top: mousePosition.y - 15,
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-8 h-8 bg-white rounded-full blur-sm" />
      </motion.div>

      {/* Ambient Light Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-3/4 left-1/2 w-64 h-64 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.5, 0.2],
          x: [0, 30, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Tech Icons */}
      {[
        { icon: '⚡', x: 10, y: 20, delay: 0 },
        { icon: '💻', x: 80, y: 30, delay: 1 },
        { icon: '🚀', x: 20, y: 70, delay: 2 },
        { icon: '🎨', x: 70, y: 80, delay: 3 },
        { icon: '🔧', x: 50, y: 10, delay: 4 },
        { icon: '📱', x: 90, y: 60, delay: 5 },
      ].map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-white/10 text-4xl"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 15, -15, 0],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Gradient Lines */}
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 200 + 100}px`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
          animate={{
            opacity: [0, 0.5, 0],
            scaleX: [0, 1, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating Dots Network */}
      {Array.from({ length: 20 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
