import BaloesInfo from "./BaloesInfo"
import Js from "../assets/js.png"
import Node from "../assets/node.png"
import Mysql from "../assets/mysql.png"
import Java from "../assets/java.png"
import React from "../assets/react.png"
import Tailwind from "../assets/tailwind.webp"
import Aws from "../assets/aws.png"
import Postman from "../assets/postman.png"
import Git from "../assets/git.png"

function Tecnologias() {
    return(
        <>
            <section>
                <h1 className="mt-2 w-fit m-auto font-mono font-bold text-homeText bg-green-800 rounded-sm py-1 px-4 mb-5">My Tech Stack</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mt-3 mb-3 gap-y-3 gap-x-3 justify-items-center
            lg:max-w-11/12 m-auto
            ">
                <BaloesInfo img={Js} text="Javascript" />
                <BaloesInfo img={Node} text="Node.js"/>
                <BaloesInfo img={React} text="React.js" />
                <BaloesInfo img={Java} text="Java" />
                <BaloesInfo img={Git} text="Git" />
                <BaloesInfo img="" text="Firebase" />
                <BaloesInfo img="" text="Supabase" />
                <BaloesInfo img={Mysql} text="MySQL" />
                <BaloesInfo img={Tailwind} text="Tailwind" />
                <BaloesInfo img={Postman} text="Postman" />
                <BaloesInfo img={Aws} text="AWS" />
            </div>
            </section>
            
        </>
    )
}export default Tecnologias