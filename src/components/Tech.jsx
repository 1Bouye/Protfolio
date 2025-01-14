import {  BiLogoCss3, BiLogoDjango, BiLogoFigma, BiLogoGit, BiLogoHtml5, BiLogoJavascript, BiLogoMongodb, BiLogoNodejs, BiLogoPostgresql, BiLogoPython, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi"

 


const Tech = () => {
  return (
    <div id = "tech" className="flex min-h-[70vh] w-full flex-col items-center          justify-center gap-16 md:gap-32">

      <h1 className = "text-4xl  font-light text-white md:text-6xl "> Technologies</h1>
      <div className = "flex flex-wrap items-center justify-center gap-10 p-5" >
        <div className = "">
          <BiLogoTypescript className = "cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>

        </div>
        <div className = "">
          <BiLogoTailwindCss className = "cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>

        </div>
        <div className = "">
          <BiLogoJavascript className = "cursor-pointer text-[80px] text-orange-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>

        </div>
        <div className = "">
          <BiLogoNodejs className = "cursor-pointer text-[80px] text-[#339933] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>

        </div>
        <div className = "">
          <BiLogoPostgresql className = "cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>

        </div>
        <div className = "">
        <BiLogoDjango className="cursor-pointer text-[80px] text-[#092E20] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />

        </div>
        <div className = "">
        <BiLogoPython className="cursor-pointer text-[80px] text-[#FFD43B] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </div>
        <div className = "">
        <BiLogoReact className="cursor-pointer text-[80px] text-[#61DAFB] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </div>
        <div className = "">
        <BiLogoFigma className="cursor-pointer text-[80px] text-[#F24E1E] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </div>
        <div className = "">
        <BiLogoGit className="cursor-pointer text-[80px] text-[#F05032] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </div>
        <div className = "">
        <BiLogoMongodb className="cursor-pointer text-[80px] text-[#F24E1E] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </div>
        <div className = "">
        <BiLogoHtml5 className="cursor-pointer text-[80px] text-[#E34F26] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </div>
        <div className = "">
        <BiLogoCss3 className="cursor-pointer text-[80px] text-[#1572B6] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </div>
        
        
        
        


      </div>
    </div>
  );
}

export default Tech