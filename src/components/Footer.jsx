import Container from "./Container"
import GithubLogo from "../assets/githubLogo.png"

function Footer() {
    return(
        <>
            <footer className="p-2 bg-footer">
                <Container> 
                    <div className="flex items-center text-homeText">
                        <span className="flex-1">Designed and Developed by João Gabriel</span>
                        <span className="flex-1 text-center">Copyright © 2026 JG</span>
                        <div className="flex-1 flex justify-end">
                            <a href="https://github.com/joaogabrielbmf">
                                <img src={GithubLogo} alt="" />
                            </a>
                        </div>
                    </div>
                </Container>
            </footer>
        </>
    )
}export default Footer