import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Main from "../../components/Main"
import Curriculo from "../Resume/curriculo.pdf"

function Resume() {
    return(
        <>
            <div className="flex flex-col min-h-screen ">
                <Header/> 
                    <Main>
                        
                    </Main>
                <Footer/>
            </div>
        </>
    )
}export default Resume