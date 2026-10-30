import { Link } from "react-router-dom"
import Videobg from "../../../assets/videoHerobg.mp4"
import {motion} from "motion/react"
import { useState } from "react"
import { TypeAnimation } from "react-type-animation"

function Hero() {
    const [videoPronto, setVideoPronto] = useState(false);

    return(
        <>
            <section className="hero flex flex-col md:flex-row pt-5 gap-10 text-homeText">
                <div className="flex-1 flex flex-col gap-5">
                    <p className="font-mono">Oi, meu nome é João Gabriel</p>
                    <motion.h1 
                    initial={{scale:0.7}}
                    animate={{scale:1}}
                    transition={{duration:2}}
                    className="text-4xl font-bold">
                        Sou estudante de Análise e Desenvolvimento de Sistemas
                    </motion.h1>
                    <p className="font-mono flex-1 min-h-32 sm:min-h-24">
                        <TypeAnimation
                            sequence={["Meu objetivo é projetar e manter infraestruturas escaláveis, integrando o desenvolvimento de software tradicional às demandas da nova geração tecnológica."]}
                            speed={80}
                            cursor={false}
                        />    
                    </p>
                    <Link to="/about" className=" w-fit bg-green-800 hover:bg-amber-50 rounded-sm p-1 font-mono">
                        Saiba mais
                    </Link>
                </div>
                <div className="flex-1">
                    <motion.video
                        initial={{ opacity: 0}}
                        animate={{ opacity: videoPronto ? 1 : 0}}
                        transition={{ duration: 3, ease:"easeInOut" }}       
                    src={Videobg} autoPlay loop muted playsInline className="rounded-3xl"
                    onLoadedData={() => setVideoPronto(true)}
                    />
                </div>
            </section>
        </>
    )
}export default Hero