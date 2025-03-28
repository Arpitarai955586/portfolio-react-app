import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa"
import { RiNetflixFill } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";
import { SiRedis, SiMongodb, SiExpress, SiNodedotjs, SiMysql } from "react-icons/si";
import Photo from "./images.png"
import Photo1 from "./image1.jpeg"
import { FaAmazon } from "react-icons/fa";
import { Element } from "react-scroll";

const Experience = () => {
   return (
      <Element name="experience">

         <div id="Experience" className="p-10 md:p-24 pb-0 md:pb-0">
            <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
            <div className="flex flex-wrap md:flex-row items-center justify-around">
               <div className="flex flex-wrap lg:w-2/5 w-full justify-center gap-8 md:p-12 py-10">

                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                     < FaHtml5 color="#E4F266" size={50} />
                  </span>
                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                     < FaCss3 color="#E4F266" size={50} />
                  </span>
                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                     <FaReact color="#61DAFE" size={50} />
                  </span>
                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                     < FaJs color="#F7DF1E" size={50} />
                  </span>
                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                     < SiExpress color="#F24E1E" size={50} />
                  </span>
                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                     < SiMongodb color="#47A248" size={50} />
                  </span>
                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                     <SiNodedotjs color="#68A063" size={50} />
                  </span>
                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                     <SiMysql color="#FF4438" size={50} />
                  </span>

               </div>

               <div>
                  {/* <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
                     < FaGoogle color="#4285F4" size={50} />

                     <span className="text-white">
                        <h2 className="leading-tight">Software engineer,google</h2>
                        <p className="text-sm leading-tight font-thin">Sept 2023-present</p>
                        <ul className="text-sm p-2">
                           <li>-work as software developer</li>
                           <li>-senior SDE developer</li>

                        </ul>
                     </span>
                  </div> */}


                  <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
                     {/* <RiNetflixFill color="#E50914" size={50} /> */}
                     <img className="w-15 rounded-4xl" src={Photo1} alt="" />
                     <span className="text-white">
                        <h2 className="leading-tight">CODESOFT</h2>
                        <p className="text-sm leading-tight font-thin">Trainee- 1 April - 1 May 2024</p>
                        <ul className="text-sm p-2">
                           <li>-Online intership</li>
                           <li>-Aspiring in Web Developer</li>

                        </ul>
                     </span>

                  </div>

                  <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
                     {/* < FaAmazon color="#4285F4" size={50} /> */}
                     <img  className="w-15 rounded-4xl" src={Photo} alt="" />

                     <span className="text-white">
                        <h2 className="leading-tight">MERN Stack developer</h2>
                        <p className="text-sm leading-tight font-thin">Q-Spider Noida</p>
                        <ul className="text-sm p-2">
                           <li>- 6 Month training in Q-spider form MERN stack Developer</li>
                           {/* <li>-senior SDE developer</li> */}

                        </ul>
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </Element>
   )
}
export default Experience;

