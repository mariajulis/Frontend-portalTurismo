// Importa o React, necessário para componentes funcionais
import React from "react";

// Importa componentes reutilizáveis que serão usados na página
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";

// Importa uma imagem (no caso, 'leroy.png') da pasta de assets
import leroy from "../assets/imagens/leroy.png";

// Define o componente funcional chamado "Home"
const Home = () => {
    return (
        <>
            {/* Define uma div principal que usa flexbox em coluna e ocupa pelo menos 100% da altura da tela */}
            <div className="flex flex-col min-h-screen">

                {/* Componente de navegação do topo (menu/nav) */}
                <Navbar/>

                <div>
                    {/* Componente Hero (destaque), recebe props para configurar imagem de fundo, título, parágrafo, rota e botão */}
                    <Hero 
                        Background={leroy}               // Imagem de fundo
                        titulo="Nova serra Verde"        // Título principal
                        paragrafo="conheça nossa atrações" // Texto descritivo
                        rota="#"                          // Link do botão (ainda sem destino)
                        botao="Saiba mais"                // Texto do botão
                    />
                    
                    {/* Área vazia para conteúdo adicional futuro */}
                    <div>

                    </div>
                </div>

                {/* Componente de rodapé (footer) */}
                <Footer />
            </div>
        </>
    )
}

// Exporta o componente "Home" para ser usado em outras partes do projeto
export default Home;
