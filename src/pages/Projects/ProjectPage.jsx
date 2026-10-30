import { useParams } from "react-router-dom"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Main from "../../components/Main"
import { projetos } from "./projetos"

function ProjectPage() {
    const {slug} = useParams()
    const projeto = projetos.find((p) => p.slug === slug);

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Main>
                <img src={projeto.img} alt="" />
            </Main>
            <Footer />
        </div>
    )
}

export default ProjectPage