import React from "react";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import leroy from "../assets/imagens/leroy.png";

const Home = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar/>
                <div>
                    <Hero Background = {leroy} titulo = "Nova serra Verde" paragrafo="conheça nossa atrações" rota="#" botao="Saiba mais" />
                    
                    <div>

                    </div>
                </div>
                    <Footer />
            </div>


        </>
    )
}

export default Home;