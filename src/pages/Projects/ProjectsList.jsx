import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Main from "../../components/Main"
import { projetos } from "./projetos"
import { Link } from "react-router-dom"
import BaloesInfo from "../About/components/BaloesInfo"
import Tailwind from "../About/assets/tailwind.webp"

function Projects() {
    return(
        <>
            <div className="flex flex-col min-h-screen">
                <Header/>
                    <Main>
                        <div className="flex flex-col gap-5 my-5"> 
                                {projetos.map((p) => (
                                    <Link key={p.slug} to={`/projects/${p.slug}`}>
                                        <article className="flex flex-col lg:flex-row gap-4 bg-green-800 p-4 rounded-sm">
                                            <img src={p.img} alt="" className="flex-1 min-w-60 h-auto w-full object-cover"/>
                                            <div className="flex flex-col gap-2">
                                                <p className="flex-4 font-mono text-homeText">{p.description}</p>
                                                <div className="flex gap-4 flex-wrap">
                                                    {p.tecnologias.map((t) => (
                                                        <BaloesInfo key={t.slug} img={t.img} text={t.nome}/> 
                                                    ))}
                                                </div>                                                                                                                                                                                                                                                                                   
                                            </div>
                                            
                                        </article>
                                    </Link>         
                            ))}
                             
                        </div>
                    </Main>
                <Footer/>    
            </div>
        </>
    )
}export default Projects 