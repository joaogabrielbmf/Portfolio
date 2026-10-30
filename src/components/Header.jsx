import {Link} from "react-router-dom"
import Container from "./Container"
import Logo from "../assets/react.svg"

function Header() {
    return(
        <>
            <header className="flex z-50 sticky top-0 items-center justify-between border border-b-teal-400/70 p-2 bg-header">
                <Container>
                    <div className="flex justify-between">               
                        <p className="font-bold text-homeText text-3xl">Jg.</p>
                        <nav className="flex flex-col md:flex-row gap-3 md:gap-6 max-w-lg">
                            <Link to="/" className="transition duration-300 ease-in-out hover:scale-110 text-center p-2 w-25 
                            border-2 border-teal-400/70 text-homeText font-mono hover:bg-teal-950/50 hover:text-white hover:border-teal-300 rounded-3xl">Home</Link>
                            <Link to="/about" className="transition duration-300 ease-in-out hover:scale-110 text-center p-2 w-25 
                            border-2 border-teal-400/70 text-homeText font-mono hover:bg-teal-950/50 hover:text-white hover:border-teal-300 rounded-3xl">About</Link>
                            <Link to="/projects" className="transition duration-300 ease-in-out hover:scale-110 text-center p-2 w-25 
                            border-2 border-teal-400/70 text-homeText font-mono hover:bg-teal-950/50 hover:text-white hover:border-teal-300 rounded-3xl">Projects</Link>
                            <Link to="/resume" className="transition duration-300 ease-in-out hover:scale-110 text-center p-2 w-25 
                            border-2 border-teal-400/70 text-homeText font-mono hover:bg-teal-950/50 hover:text-white hover:border-teal-300 rounded-3xl">Resume</Link>
                        </nav>
                    </div>
                
                </Container>
            </header>
        </>
    )
}export default Header