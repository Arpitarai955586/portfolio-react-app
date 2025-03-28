import { IoArrowForward } from "react-icons/io5";
import { Element } from "react-scroll";
import Image from "./sandhya.jpeg"
const About = () => {
    return (
        <Element name="about">

            <div id="About" className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
                <div>
                    <h2 className="text-2xl md:text-4xl font-bold">About</h2>
                    <div className="md:flex flex-wrap flex-col md:flex-row items-center gap-x-5">
                    <img className="md:h-80 w-2/5 hidden md:block rounded-2xl" src={Image} alt="" />
                        <ul>
                            <div className="flex gap-3 py-4">
                                < IoArrowForward size={30} className="mt-1" />
                                <span className="w-90">
                                    <h1 className="text-xl md:text-2xl font-semibold leading-normal">Graduation</h1>
                                    <p className="text-sm italic">B.tech in Computer Science and Engineering (2021-2025) , Sultanpur</p>
                                    <p className="text-sm md:text-md leading-tight">Kamla Nehru institute of Physical and Social Sciences</p>
                                </span>
                            </div>
                            <div className="flex gap-3 py-4">
                                < IoArrowForward size={30} className="mt-1" />
                                <span className="w-90">
                                    <h1 className="text-xl md:text-2xl font-semibold leading-normal">MERN Stack Developer</h1>
                                    <p className="text-sm italic">J/Q Spiders, Noida</p>
                                    <p className="text-sm md:text-md leading-tight">Learning new technologies and gaining experience in MERN stack</p>
                                </span>
                            </div>
                            <div className="flex gap-3 py-4">
                                < IoArrowForward size={30} className="mt-1" />
                                <span className="w-90">
                                    <h1 className="text-xl md:text-2xl font-semibold leading-normal">Senior Secondary Schooling</h1>
                                    <p className="text-xl italic text-blue-900">Sir Syed Public School</p>
                                    
                                    <p className="text-sm italic ">Class 10th - Science with 80.4 percent</p>
                                    <p className="text-xl italic text-blue-900">Ashok Singh Intermediate College</p>
                                    <p className="text-sm italic ">Class 12th - Science with 78.4 percent</p>
                                    {/* <p className="text-sm md:text-md leading-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, doloremque.</p> */}
                                </span>
                            </div>
                        </ul>

                    </div>
                </div>
            </div>
        </Element>
    )
}
export default About;