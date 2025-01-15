import {  BiLogoCss3, BiLogoDjango, BiLogoFigma, BiLogoGit, BiLogoHtml5, BiLogoJavascript, BiLogoMongodb, BiLogoNodejs, BiLogoPostgresql, BiLogoPython, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi"
import {motion} from "framer-motion"
import { SiMysql } from "react-icons/si";
 


const Tech = () => {

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }
  return (
    <div id = "tech" className="flex min-h-[70vh] w-full flex-col items-center          justify-center gap-16 md:gap-32">

      <motion.h1
       variants={variants}
       initial = "hidden"
       whileInView= "visible"
       transition = {{ duration: 0.5 }} 
      className = "text-4xl  font-light text-white md:text-6xl "> Technologies</motion.h1>

      <div className = "flex flex-wrap items-center justify-center gap-10 p-5" >
        <motion.div variants={variants}
       initial = "hidden"
       whileInView= "visible"
       transition = {{ duration: 0.5 }}>
          <BiLogoTypescript className = "cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>

        </motion.div >

        

        <motion.div variants={variants}
       initial = "hidden"
       whileInView= "visible"
       transition = {{ duration: 0.5 }}>
          <BiLogoJavascript className = "cursor-pointer text-[80px] text-orange-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>

        </motion.div>

        <motion.div variants={variants}
       initial = "hidden"
       whileInView= "visible"
       transition = {{ duration: 0.5 }}>
          <BiLogoTailwindCss className = "cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>

        </motion.div>

        <motion.div variants={variants}
       initial = "hidden"
       whileInView= "visible"
       transition = {{ duration: 0.5 }}>
          <BiLogoNodejs className = "cursor-pointer text-[80px] text-[#339933] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>

        </motion.div>

        

        <motion.div variants={variants}
       initial = "hidden"
       whileInView= "visible"
       transition = {{ duration: 0.5 }}>
        <BiLogoDjango className="cursor-pointer text-[80px] text-[#092E20] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />

        </motion.div>

        <motion.div variants={variants}
       initial = "hidden"
       whileInView= "visible"
       transition = {{ duration: 0.5 }}>
        <BiLogoPython className="cursor-pointer text-[80px] text-[#FFD43B] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        <motion.div variants={variants}
       initial = "hidden"
       whileInView= "visible"
       transition = {{ duration: 0.5 }}>
        <BiLogoReact className="cursor-pointer text-[80px] text-[#61DAFB] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        <motion.div variants={variants}
       initial = "hidden"
       whileInView= "visible"
       transition = {{ duration: 0.5 }}>
        <BiLogoFigma className="cursor-pointer text-[80px] text-[#F24E1E] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        <motion.div variants={variants}
       initial = "hidden"
       whileInView= "visible"
       transition = {{ duration: 0.5 }}>
        <BiLogoGit className="cursor-pointer text-[80px] text-[#F05032] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        <motion.div variants={variants}
       initial = "hidden"
       whileInView= "visible"
       transition = {{ duration: 0.5 }}>
        <BiLogoMongodb className="cursor-pointer text-[80px] text-[#47A248] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        <motion.div variants={variants}
       initial = "hidden"
       whileInView= "visible"
       transition = {{ duration: 0.5 }}>
        <SiMysql className="cursor-pointer text-[80px] text-[#1572B6] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        <motion.div variants={variants}
       initial = "hidden"
       whileInView= "visible"
       transition = {{ duration: 0.5 }}>
        <BiLogoHtml5 className="cursor-pointer text-[80px] text-[#E34F26] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        

        <motion.div variants={variants}
       initial = "hidden"
       whileInView= "visible"
       transition = {{ duration: 0.5 }}>
        <BiLogoCss3 className="cursor-pointer text-[80px] text-[#1572B6] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>
        
        
        
        
        


      </div>
    </div>
  );
}

export default Tech