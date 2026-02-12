import { useState, useEffect } from "react";
import Fundamentos001P01Component from "../Fundamentos001/Fundamentos001_P01Component";



function Fundamentos001(){
    const [page, setPage] = useState(0);

    useEffect(() => {
        // Hacer scroll suave al inicio del contenido
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [page]);
    const resetpage = () => {
        const element = document.getElementById('inicio');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
     }


    return(
        <div className="w-full rounded-lg shadow-2xl bg-white p-5">
            <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/6 flex flex-col gap-2 md:sticky md:top-4 h-fit border-r border-gray-200 pr-4">
                    <span className="font-bold text-gray-700 mb-2">Índice</span>
                    <a href="#inicio" onClick={(e) => { e.preventDefault(); setPage(0); const element = document.getElementById('inicio'); setTimeout(() => element?.scrollIntoView({ behavior: 'smooth' }), 0); }} className="hover:text-blue-600 font-bold hover:bg-gray-50 py-2 rounded transition-colors">Introducción</a>
                    
                    <a href="#Referencias" className="text-gray-600 hover:text-blue-600 hover:bg-gray-50 p-2 rounded transition-colors">Referencias</a>
                </div>
                
                <div className="w-full md:w-5/6">
                    {page === 0 ?<div>
                        <h1 id="inicio" className="titulo-principal">Introducción</h1>
                        <h2 className="subtitulo">¿Qué es la lógica de programación?</h2>
                        <p className="parrafo">
                            Para comenzar en el mundo de la programación, primero debemos entender cómo 
                            funcionan las aplicaciones que usamos todos los días. Detrás de cada botón, cada 
                            mensaje y cada resultado, existe una serie de instrucciones organizadas de manera 
                            lógica. <br />

                            Por eso, comprender la lógica de programación es el primer paso para aprender a programar. 
                            Sin una base lógica clara, es difícil construir programas que funcionen correctamente. 
                            Entender este concepto es fundamental para avanzar en el aprendizaje.
                            <br />
                            Para lograrlo, veremos qué es el pseudocódigo utilizando la herramienta PSeInt, así como los diagramas 
                            de flujo como apoyo visual para representar la lógica de un programa.
                        </p>
                        <p className="parrafo">

                        </p>
                    </div> : null}
                    {page === 1 ?
                        <Fundamentos001P01Component />
                    : null}
                    
                    
                    <h1 id="Referencias" className="titulo-principal">Referencias</h1>
                    <div className="flex flex-col gap-2 text-gray-600 text-sm">
                        
                    </div>
                </div>

            </div>
                <button
                    onClick={resetpage}
                    className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white font-bold p-3 rounded-full shadow-lg transition-all duration-300 z-50"
                    title="Regresar al menú"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                    </svg>
                </button>
           
       </div>
    )
}

export default Fundamentos001;