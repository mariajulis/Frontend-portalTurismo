import React from 'react';


const AboutHero = (props) => {
    return (
        <div className=" h-[900px] max-w-full  bg-white "
            
        >
            <div />
            <div className="relative z-10 text-center p-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    {props.titulo}
                </h1>
                <p className="text-lg md:text-x2 mb-6 max-w-3xl mx-auto drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    {props.paragrafo}
                </p>
                
            </div>
        </div>
    );
};

export default AboutHero;