import Navbar from "./component/Navbar";
import './output.css'
import './input.css'
import Home from "./component/home/Home";
import About from "./component/about/About";
import Experience from "./component/experience/Experience";
import Project from "./component/project/Project";
import Footer from "./component/footer/Footer";

const App=() =>{
 return(
    <div  className="bg-[#171d32] h-auto w-full overflow-hidden ">
       <Navbar/>
       <Home/>
       <About/>
       <Experience/>
       <Project/>
       <Footer/>
    </div>
  )
}

export default App;
