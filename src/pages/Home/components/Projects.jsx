import MiniCard from "./MiniCard"
import { Link } from "react-router-dom"
import { projetos } from "../../Projects/projetos.js"
import Socials from "./Socials.jsx"


function Projects() {
    return(
        <>
            <div className="flex gap-5">
                {/*
                    <section className="flex flex-1 flex-col items-center mt-5 text-homeText font-bold font-mono py-3 gap-x-4">
                <Link to="/projects">
                    <h1 className="bg-green-800 rounded-sm py-1 px-4 mb-4 hover:bg-amber-50">Projetos</h1>
                </Link>
                
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                    {projetos.map((projeto)=>(
                    <Link key={projeto.slug} to={`/projects/${projeto.slug}`}>
                        <MiniCard titulo={projeto.titulo} img={projeto.img}/>
                    </Link>
                ))}
    
                </div>
                </section>
                */ }
                <section className="flex-1 mt-5 pt-4 flex justify-center text-homeText font-bold font-mono py-5 gap-4">
                   <Socials/>
                </section>
            </div>
            
        </>
    )
}export default Projects