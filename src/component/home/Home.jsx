import { Link } from "react-scroll";
import Image from "./Arpita1.jpg"
const Home = () => {
  return (
    <div className="text-white flex w-full md:flex-row flex-col-reverse justify-between items-center p-10 pt-16 md:p-20 ">
      <div className="md:w-2/4 md:pt-10 pt-2">
        <h1 className="text-4xl font-bold flex leading-normal tracking-tighter md:text-left text-center">
          Hello' I am Arpita
        </h1>
        <p className=" md:text-2xl tracking-tight mt-2 text-left">I am MERN stack developer specializes in building web applications using MongoDB, Express.js, React.js, and Node.js, leveraging React.js across both frontend and backend development. </p>
        <div className="flex  flex-row">


          <Link to="contact" smooth={true} duration={500}>
            <button className="mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">Contact me</button>
          </Link>
          <a  className=" md:w-64 lg:w-72" href="/Resume_Aripta.pdf"  target="_blank">
            <button className="mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] ml-2">
              Download Resume
            </button>
          </a>
        </div>
      </div>
      <div className="md:w-64  lg:w-72 w-52 rounded-2xl">
        <img className="w-full h-full rounded-2xl" src={Image} alt="" />
      </div>
    </div>
  )
}
export default Home;