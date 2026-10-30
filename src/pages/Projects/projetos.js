import { listaTecnologias } from "./tecnologias";

export const projetos = [
    {slug:"galeria-de-arte", 
        titulo:"Acervo LM",
        tecnologias:[listaTecnologias.find((t) => t.slug == "react"),
            listaTecnologias.find((t) => t.slug == "javascript"),
            listaTecnologias.find((t) => t.slug == "tailwind")
        ],
        description:"O Acervo LM é um site para uma galeria de arte que ainda não tinha presença digital, desenvolvido para que os clientes possam conhecer o catálogo de obras e entrar em contato com o proprietário por formulário ou WhatsApp. O projeto conta com um painel administrativo protegido por login, onde o dono cadastra, edita e remove obras sem depender de um desenvolvedor. Foi construído com React e Tailwind CSS no front-end, com interface responsiva para celular e computador, e Supabase (PostgreSQL e autenticação) no back-end. O projeto está em andamento e já pensa no uso real do dono da galeria.", 
        img: "https://images.unsplash.com/photo-1545989253-02cc26577f88?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
    {slug:"gestao-de-vendas", 
        titulo:"Gestão de Vendas",
        tecnologias:[],
        description:"O Gestão de Vendas é um sistema web para pequenos vendedores controlarem produtos, estoque, clientes, compras, orçamentos e vendas, pensado para quem vende álbuns e figurinhas, inclusive pela Shopee. Ele calcula as taxas de cada venda, converte orçamentos em vendas e apresenta um dashboard com faturamento, resultado financeiro, produtos mais vendidos e alertas de estoque baixo, com filtro por período. Cada usuário tem sua própria conta com login, e seus dados ficam separados dos demais. Foi desenvolvido com Java 21, Spring Boot e PostgreSQL (Supabase), com front-end em HTML, CSS e JavaScript, e está publicado em container Docker no Render.", 
        img: "https://images.unsplash.com/photo-1534951009808-766178b47a4f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
];