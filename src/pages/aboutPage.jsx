import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import AboutHero from "../components/aboutHero";
import coqueiro from "../assets/imagens/coqueiro.png"


const AboutPage = () => {
    return (
        <>
            <div className=" flex-col min-h-screen relative  h-[430px] bg-cover bg-center text-purple-800"
                style={{ backgroundImage: `url(${coqueiro})` }}>
                <Navbar />


                <div className="p-7 mt-7">
                    <AboutHero titulo="maria julia" paragrafo="Foi uma experiência dificil, engraçada e extremamente complicada eu achei complicado a parte dos importes, imagens com isso pedi a ajuda do professor e dos meus colegas e outro poblema comum seria em pequenos erros onde eu mesma não conseguia visualizar, exemplo nas divs, pontuação, sinal, eu fiquei apavorada e com medo mas com muita ajuda consegui concluir e compreendi que necessito de ajuda e como não é preciso ter vergonha e eu agradeço a todos pelo apoio , comprendi a organização das paginas e componentes o uso das imagens, animações,e como é importante o uso das cores ." />
                </div>

                
            </div>
            <Footer/>
        </>
    )
}

export default AboutPage;