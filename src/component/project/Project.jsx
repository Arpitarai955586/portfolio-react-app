import { Element } from "react-scroll";
import ProjectCard from "./ProjectCard";
import projectData from "./projects.json"

const Project=()=>{
    console.log(projectData);
    
    return (
        <Element name="project">

        <div id="Project" className="p-10 md:p-24 text white">
        <h1 className="text-2xl md:text-4xl text-white font-bold"> Projects</h1>
        <div className="py-12 flex flex-wrap gap-5 justify-center  ">
            
            {
                projectData.map(({id,title,main,project_url,projectcode_url,image})=>{
                    return <ProjectCard key={id} title={title} main={main} project_url={project_url} projectcode_url={projectcode_url} image={image}/>
                })
            }
           
            {/* <ProjectCard 
            title="TODO App"
            main="this is a Weather Forecast App using in HTML ,CSS and JavaScript .this app allow users to get real-time weather updates by simple entering the city name"/>
            <ProjectCard 
            title="RIOT GAMES Clone"
            main="this is a  website created in HTML, CSS and JavaScript."/> */}
        </div>
            </div>
        </Element>
            
    )
}
export default Project;