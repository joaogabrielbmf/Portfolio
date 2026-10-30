import Workstation from "../assets/workstation.png"

function AboutHero() {
    return(
        <>
            <div className="flex flex-col md:flex-row lg:flex-row my-10">
                <div className="flex-1 flex flex-col gap-4 text-homeText font-mono">
                    <h1 className="text-3xl">Quem Sou EU</h1>
                    <div className="flex flex-col gap-4">
                        <p>E aí! Meu nome é João Gabriel, sou de Fortaleza, Brasil. 
                        Hoje estou cursando Análise e Desenvolvimento de Sistemas na Unifor (Universidade de Fortaleza).</p>
                        <h4>Quando o notebook fecha, o que me move é:</h4>                     
                        <ul>
                            <li>🎮 Video games</li>
                            <li>🌎 Viagens</li>
                            <li>📚 Leitura</li>
                            <li>💡 Aprender novas tecnologias</li>
                        </ul>
                    </div>
                </div>
                <img src={Workstation} alt="" className="flex-1 rounded-2xl aspect-square max-h-80 w-auto "/>
            </div>
        </>
    )
}export default AboutHero