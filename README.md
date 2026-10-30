# Portfólio — João Gabriel Ferraz
 
Meu portfólio pessoal, feito para apresentar quem eu sou, as tecnologias que uso e os projetos que desenvolvo. O site tem página inicial, sobre mim, lista de projetos, página de detalhes de cada projeto e uma página com o meu currículo em PDF.
 
🔗 **Site no ar:** https://portofolio-joaogabrielbmf.vercel.app/
 
<!-- Adicione uma captura de tela em docs/screenshot.png e descomente:
![Captura de tela do portfólio](./docs/screenshot.png)
-->
 
## Funcionalidades
 
- **Navegação entre páginas** com React Router: início, sobre, projetos, detalhes do projeto e currículo.
- **Páginas de projeto geradas dinamicamente** pela rota `/projects/:slug`, a partir de uma lista de dados (`projetos.js`). Para adicionar um projeto novo, basta incluir um item na lista.
- **Visualização do currículo em PDF** direto no site, com `react-pdf`.
- **Interface responsiva** com Tailwind CSS, para celular e computador.
- **Animações** com Motion e efeito de digitação com `react-type-animation`.
## Tecnologias
 
| Área | Ferramentas |
| --- | --- |
| Biblioteca | React 19 |
| Build e desenvolvimento | Vite |
| Estilização | Tailwind CSS 4 |
| Rotas | React Router |
| Animações | Motion, react-type-animation |
| PDF | react-pdf |
| Qualidade de código | Oxlint |
 
## Como rodar o projeto
 
Pré-requisitos: [Node.js](https://nodejs.org/) (versão LTS recente) e npm.
 
```bash
# 1. Clone o repositório
git clone https://github.com/joaogabrielbmf/Portfolio.git
cd Portfolio
 
# 2. Instale as dependências
npm install
 
# 3. Rode em modo de desenvolvimento
npm run dev
```
 
O site abre em `http://localhost:5173` (a porta pode mudar; o terminal mostra o endereço).
 
### Outros comandos
 
| Comando | O que faz |
| --- | --- |
| `npm run build` | Gera a versão de produção na pasta `dist` |
| `npm run preview` | Abre uma prévia local da versão de produção |
| `npm run lint` | Verifica o código com o Oxlint |
 
## Estrutura
 
```
src/
├── components/        # Header, Footer, Main, Container
├── pages/
│   ├── Home/          # Página inicial (Hero, projetos em destaque, redes sociais)
│   ├── About/         # Sobre mim e tecnologias
│   ├── Projects/      # Lista, página de detalhes e dados dos projetos
│   └── Resume/        # Currículo em PDF
├── App.jsx            # Definição das rotas
└── main.jsx           # Ponto de entrada
```
 
## Contato
 
- LinkedIn: [João Gabriel Bastos Montezuma Ferraz](https://www.linkedin.com/in/jo%C3%A3o-gabriel-bastos-montezuma-ferraz-83948524b/)
- GitHub: [@joaogabrielbmf](https://github.com/joaogabrielbmf)
- E-mail: joao35797@gmail.com
 
