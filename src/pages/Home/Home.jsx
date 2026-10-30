import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function Home() {
    return(
        <>  
            <div className="flex flex-col min-h-screen">
                <Header/> 
                    <Main>
                        <Hero/>
                        <Projects/>
                    </Main>
                <Footer/>
            </div>
            
        </>
    )
}export default Home