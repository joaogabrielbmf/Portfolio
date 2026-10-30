import Header from "../../components/Header"
import Main from "../../components/Main"
import Footer from "../../components/Footer"
import Tecnologias from "./components/Tecnologias"
import AboutHero from "./components/AboutHero"

function About() {
    return(
        <>
            <div className="flex flex-col min-h-screen">
                <Header/> 
                    <Main>
                        <AboutHero/>
                        <Tecnologias/>
                    </Main>
                <Footer/>
            </div>
        </>
    )
}export default About