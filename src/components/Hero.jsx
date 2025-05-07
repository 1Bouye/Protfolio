import profile from "/public/profile.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32">
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
        initial= {{ y: -50,opacity: 0}}
        animate= {{ y:0, opacity: 1 }}
        transition= {{ duration: 0.8, delay: 0.2}}
        >
          <img
            src={profile}
            alt=""
            className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-indigo-600 md:w-[350px]"
          />
        </motion.div>
        <motion.div 
        initial= {{ y: 50,opacity: 0}}
        animate= {{ y:0, opacity: 1 }}
        transition= {{ duration: 0.8, delay: 0.2}}

        className="flex max-w-[400px] flex-col items-center justify-center gap-3 text-center">
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl">
            Bouye
          </h1>
          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl md:text-3xl">
            Full-Stack Web Developer
          </h3>
          <p className="text-lg text-gray-400 md:text-xl">
            I am a full-stack web developer, and a passionate developer with a keen eye for detail and a strong desire to create meaningful experiences for users.
            <br />
            I have worked on various projects, from small businesses , and I am always eager to learn and grow.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
