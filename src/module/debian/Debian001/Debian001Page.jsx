import { useState, useEffect } from "react";
import Debian001P01Component from "./Debian001_P01Component";

function Debian001(){
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
                    
                </div>
                
                <div className="w-full md:flex-1 min-w-0">
                    {page === 0 ?<div>
                        <h1 id="inicio" className="titulo-principal">Introducción</h1>
                        <h2 className="subtitulo">¿Qué es Debian?</h2>
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <p className="parrafo w-full md:w-2/3">
                                Debian es un sistema operativo libre y de código abierto basado en el núcleo Linux. Es conocido por su estabilidad, seguridad y amplia comunidad de desarrolladores. Debian proporciona una gran cantidad de paquetes de software precompilados, lo que facilita la instalación y actualización de aplicaciones. Además, Debian es la base de muchas otras distribuciones populares, como Ubuntu.
                            </p>
                            <div className="contenedor-imgen w-full md:w-1/3">
                            <img src="/Debian_img/debianp1/LogoDebian.svg" className="w-full max-w-xs h-24" alt="Logotipo de Debian" />
                            </div>
                        </div>
                        
                    </div> : null}
                    {page === 1 ?
                        <Debian001P01Component />
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

export default Debian001;
