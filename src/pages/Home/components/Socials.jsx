const redes = [
    {
        nome: "GitHub",
        url: "https://github.com/joaogabrielbmf",
        icone: (
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
        ),
    },
    {
        nome: "LinkedIn",
        url: "https://www.linkedin.com/in/jo%C3%A3o-gabriel-bastos-montezuma-ferraz-83948524b/",
        icone: (
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
        ),
    },
    {
        nome: "Email",
        url: "mailto:joao35797+portfolio@gmail.com",
        icone: (
            <path d="M2 4h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm1 3.24V18h18V7.24l-9 6.75-9-6.75ZM4.5 6l7.5 5.62L19.5 6h-15Z" />
        ),
    },
]

function Socials() {
    return (
        <>
           <section className="flex flex-col items-center gap-3 text-center text-homeText font-mono mt-10 mb-6">
    <h2 className="text-2xl font-bold">Onde me encontrar</h2>
    <p className="max-w-sm">
        Vamos conversar? Fique à vontade para entrar em contato
    </p>

    <nav aria-label="Redes sociais" className="flex flex-row gap-3 mt-2">
        {redes.map((rede) => (
            <a
                key={rede.nome}
                href={rede.url}
                target={rede.url.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={rede.nome}
                title={rede.nome}
                className="flex items-center justify-center w-11 h-11 bg-amber-50 text-green-800 rounded-full shadow-md transition duration-300 ease-in-out hover:bg-green-800 hover:text-amber-50 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800"
            >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                    {rede.icone}
                </svg>
            </a>
        ))}
    </nav>
</section>
        </>
        
    )
}export default Socials