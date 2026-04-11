import { useState, useEffect } from "react";
import IA001P01Component from "./IA001_P01Component";
import IA001P02Component from "./IA001_P02Component";
import IA001P03Component from "./IA001_P03Component";
import IA001P04Component from "./IA001_P04Component";
import IA001P05Component from "./IA001_P05Component";

function IA001(){
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
                    <a href="#inicio" onClick={(e) => { e.preventDefault(); setPage(1); }} className=" hover:text-blue-600 font-bold hover:bg-gray-50 py-2 rounded transition-colors">Clase 1</a>
                    <a href="#inicio" onClick={(e) => { e.preventDefault(); setPage(2); }} className=" hover:text-blue-600 font-bold hover:bg-gray-50 py-2 rounded transition-colors">Clase 2</a> 
                    <a href="#inicio" onClick={(e) => { e.preventDefault(); setPage(3); }} className=" hover:text-blue-600 font-bold hover:bg-gray-50 py-2 rounded transition-colors">Clase 3</a> 
                    <a href="#inicio" onClick={(e) => { e.preventDefault(); setPage(4); }} className=" hover:text-blue-600 font-bold hover:bg-gray-50 py-2 rounded transition-colors">Clase 4</a> 
                    <a href="#inicio" onClick={(e) => { e.preventDefault(); setPage(5); }} className=" hover:text-blue-600 font-bold hover:bg-gray-50 py-2 rounded transition-colors">Clase 5</a>
                </div>
                
                <div className="w-full md:flex-1 min-w-0">
                    {page === 0 ?<div>
                        <h1 id="inicio" className="titulo-principal">Introducción</h1>
                        <h2 className="subtitulo">Programación Asistida por Inteligencia Artificial</h2>
                        <p className="parrafo">
                           Bienvenido al curso de IA Nivel Básico. En este trayecto, aprenderás cómo la Inteligencia Artificial se ha convertido en la herramienta más potente para los desarrolladores modernos. No se trata solo de que la IA escriba código por ti, sino de aprender a colaborar con ella para resolver problemas complejos, optimizar procesos y acelerar la creación de aplicaciones desde la idea hasta la ejecución.
                        </p>
                        <p className="parrafo">
                           A través de estas 5 sesiones, exploraremos desde los fundamentos técnicos de los modelos de lenguaje hasta la construcción de aplicaciones funcionales, utilizando la IA como un asistente experto en cada paso del camino.
                        </p>
                    </div> : null}
                    {page === 1 ?
                        <IA001P01Component />
                    : null}
                    {page === 2 ?
                        <IA001P02Component />
                    : null}
                    {page === 3 ?
                        <IA001P03Component />
                    : null}
                    {page === 4 ?
                        <IA001P04Component />
                    : null}
                    {page === 5 ?
                        <IA001P05Component />
                    : null}
                    
            
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

export default IA001;