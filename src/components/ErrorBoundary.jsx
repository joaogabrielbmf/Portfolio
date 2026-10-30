import { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Curriculo from "../pages/Resume/Curriculo_Joao_Gabriel_Ferraz.pdf";

class ErrorBoundary extends Component {
  state = { erro: false };

  static getDerivedStateFromError() {
    return { erro: true };
  }

  render() {
    if (!this.state.erro) return this.props.children;

    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <Main>
          <div className="w-full max-w-225 mx-auto my-10 text-center">
            <p className="mb-6">
              Não foi possível exibir o currículo neste dispositivo.
            </p>
            <a
              href={Curriculo}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Abrir currículo em PDF
            </a>
          </div>
        </Main>
        <Footer />
      </div>
    );
  }
}

export default ErrorBoundary;