import { useState } from "react"
import {Link} from "react-router-dom"
import Container from "./Container"

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const links = [
        {to: "/", label: "Home"},
        {to: "/about", label: "Sobre"},
        {to: "/projects", label: "Projetos"},
        {to: "/resume", label: "Currículo"},
    ]
    const linkClassName = "transition duration-300 ease-in-out hover:scale-110 text-center p-2 w-25 border-2 border-teal-400/70 text-homeText font-mono hover:bg-teal-950/50 hover:text-white hover:border-teal-300 rounded-3xl"

    return(
        <header className="z-50 sticky top-0 relative border border-b-teal-400/70 p-2 bg-header">
            <Container>
                <div className="flex items-center justify-between">
                    <p className="font-bold text-homeText text-3xl">Jg.</p>
                    <nav aria-label="Navegação principal" className="hidden md:flex flex-row gap-6 max-w-lg">
                        {links.map(({to, label}) => (
                            <Link key={to} to={to} className={linkClassName}>{label}</Link>
                        ))}
                    </nav>
                    <button
                        type="button"
                        className="md:hidden p-2 text-homeText"
                        aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-navigation"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg aria-hidden="true" viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2">
                            {isMenuOpen
                                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
                                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
                        </svg>
                    </button>
                </div>
                <nav
                    id="mobile-navigation"
                    aria-label="Navegação principal"
                    className={`${isMenuOpen ? "flex" : "hidden"} md:hidden absolute right-[10%] top-full z-50 w-56 flex-col gap-3 rounded-xl border border-teal-400/70 bg-emerald-900 p-3 shadow-lg`}
                >
                    {links.map(({to, label}) => (
                        <Link
                            key={to}
                            to={to}
                            className={linkClassName}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {label}
                        </Link>
                    ))}
                </nav>
            </Container>
        </header>
    )
}

export default Header