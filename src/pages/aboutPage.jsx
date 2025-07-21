import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import AboutHero from "../components/aboutHero";
import coqueiro from "../assets/imagens/coqueiro.png";

const AboutPage = () => {
    return (
        <>
            <div
                className="flex-col min-h-screen relative h-[430px] bg-cover bg-center text-purple-800"
                style={{ backgroundImage: `url(${coqueiro})` }}
            >
                <Navbar />
                <div className="p-7 mt-7">
                    <AboutHero
                        titulo="Maria Júlia"
                        paragrafo="Foi uma experiência difícil, engraçada e extremamente complicada. Achei complicado lidar com as importações e as imagens. Por isso, pedi ajuda ao professor e aos meus colegas. Outro problema comum eram pequenos erros, como em divs, pontuação e sinais, que eu mesma não conseguia visualizar. Fiquei apavorada e com medo, mas com muita ajuda consegui concluir. Compreendi que preciso de apoio e que não há vergonha nisso. Agradeço a todos pelo suporte. Aprendi sobre organização de páginas, componentes, uso de imagens, animações e a importância das cores."
                    />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AboutPage;