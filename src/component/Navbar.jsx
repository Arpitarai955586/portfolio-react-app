import { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "react-icons/ri";
import { Link } from "react-scroll";
const Navbar = () => {
    const [menu, openMenu] = useState(false)
    const [showmenu, setOpenMenu] = useState(false)
    return (
        <nav className="fixed top-0 w-full bg-[#171d32] bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]">

            < div className="flex flex-wrap items-center justify-between md:item-center text-white px-10 pt-6 md:px-20">
                <span className="text-xl font-bold tracking-wide pb-1">Portfolio</span>
                <ul className={`${menu && showmenu ? 'block absolute -right-12 top-8' : 'hidden gap-20'}
            mx-24 py-2 font-semibold bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-20
         `}>
                    <Link to="about" smooth={true} duration={500} className=" hover:cursor-pointer pb-1 hover:border-b transition-all duration-300 ease-in-out">
                        <li className="text-md p-1 md:p-0">About</li></Link>
                    <Link to="experience" smooth={true} duration={500} className=" hover:cursor-pointer pb-1 hover:border-b transition-all duration-300 ease-in-out" >
                        <li className="text-md p-1 md:p-0">Experience</li></Link>
                    <Link to="project" smooth={true} duration={500} className=" hover:cursor-pointer pb-1 hover:border-b transition-all duration-300 ease-in-out">
                        <li className="text-md p-1 md:p-0">Projects</li></Link>
                    <Link to="contact" smooth={true} duration={500} className=" hover:cursor-pointer pb-1 hover:border-b transition-all duration-300 ease-in-out">
                        <li className="text-md p-1 md:p-0">Contact</li></Link>


                </ul>
                {!showmenu ? (
                    <RiMenu2Line size={30} className="md:hidden absolute right-10 top-6 transition-all duration-300"
                        onClick={() => {
                            openMenu(!menu);
                            setOpenMenu(!showmenu);

                        }} />
                ) : (
                    <RiCloseLine size={30}  onClick={() => {
                        openMenu(!menu);
                        setOpenMenu(!showmenu);

                    }} className="md:hidden absolute right-10 top-6 transition-all duration-300" />
                )
                }
            </div>
        </nav>
    )
}
export default Navbar;