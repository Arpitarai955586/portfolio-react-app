const ProjectCard=({title,main ,project_url,projectcode_url,image})=>{
    return(
        <div className="p-3 md:p-6 flex flex-col w-72 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl" >
            <img  className ="h-full w-full rounded-2xl p-2 object-cover" src={image} alt="" />
            {/* {image} */}

            <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal mt-1 text-white ">
                {title}
            </h3>
            <p className="px-4 text-sm md:text-md leading-tight py-2 text-white">{main}</p>
            <div className="flex mt-5 gap-x-3 items-center justify-center">
            <a href={project_url}>
            <button className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">Demo</button>
            </a>
               <a href={projectcode_url}>
               <button className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">Source code</button>
               </a>
            </div>
            
        </div>
    )
}
export default ProjectCard;