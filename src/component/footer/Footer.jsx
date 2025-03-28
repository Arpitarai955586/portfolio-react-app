import React from "react";
import { MdOutgoingMail } from "react-icons/md";
import { CiLinkedin} from "react-icons/ci";
import {FaGithub} from "react-icons/fa"
import { Element } from "react-scroll";
const Footer=()=>{
  return (
      <Element name="contact">
        <div id="Footer" className=" flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center">
            <div >
                <h1 className="text-2xl md:text-6xl font-normal ">Contact</h1>
                <h3 className="text-sm md:text-2xl font-normal">Feel Free to react out</h3>
            </div>
            <ul className="text-sm md:text-xl " >
                <li className="flex  gap-1 items-center">
                  <MdOutgoingMail size={20}/>
                  ariptarai@gmail.com
                </li>
                  <li className="flex gap-1 items-center">
                    < CiLinkedin/>
                    linkdin.com/username
                  </li>
                  <li className="flex gap-1 items-center">
                    < FaGithub/>
                     Github.com
                  </li>
            </ul>
      </div>
      </Element>
    )
}
export default Footer;