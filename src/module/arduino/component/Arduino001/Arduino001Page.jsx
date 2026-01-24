import { useState, useEffect } from "react";
import Arduino001P01Component from "./Arduino001_P01Component";
import Arduino001P02Component from "./Arduino001_P02Component";
import Arduino001P03Component from "./Arduino001_P03Component";
import Arduino001P04Component from "./Arduino001_P04Component";
import Arduino001P05Component from "./Arduino001_P05Component";
import Arduino001P06Component from "./Arduino001_P06Component";

function Arduino001(){
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
                    <a href="#Titulo2" onClick={(e) => { e.preventDefault(); setPage(0); const element = document.getElementById('Titulo2'); setTimeout(() => element?.scrollIntoView({ behavior: 'smooth' }), 0); }} className="text-gray-600 hover:text-blue-600 hover:bg-gray-50 p-2 rounded transition-colors">Arduino UNO</a>
                    <a href="#Titulo3" onClick={(e) => { e.preventDefault(); setPage(0); const element = document.getElementById('Titulo3'); setTimeout(() => element?.scrollIntoView({ behavior: 'smooth' }), 0); }} className="text-gray-600 hover:text-blue-600 hover:bg-gray-50 p-2 rounded transition-colors">Wokwi</a>
                    <a href="#inicio" onClick={(e) => { e.preventDefault(); setPage(1); }} className=" hover:text-blue-600 font-bold hover:bg-gray-50 py-2 rounded transition-colors">"hola mundo"</a>
                    <a href="#inicio" onClick={(e) => { e.preventDefault(); setPage(2); }} className=" hover:text-blue-600 font-bold hover:bg-gray-50 py-2 rounded transition-colors">Variables</a>
                    <a href="#inicio" onClick={(e) => { e.preventDefault(); setPage(3); }} className=" hover:text-blue-600 font-bold hover:bg-gray-50 py-2 rounded transition-colors">Estructuras con operadores</a>
                    <a href="#inicio" onClick={(e) => { e.preventDefault(); setPage(4); }} className=" hover:text-blue-600 font-bold hover:bg-gray-50 py-2 rounded transition-colors">Estructuras con comparadores</a>
                    <a href="#inicio" onClick={(e) => { e.preventDefault(); setPage(5); }} className=" hover:text-blue-600 font-bold hover:bg-gray-50 py-2 rounded transition-colors">Ámbito de variables y operadores</a>
                    <a href="#inicio" onClick={(e) => { e.preventDefault(); setPage(6); }} className=" hover:text-blue-600 font-bold hover:bg-gray-50 py-2 rounded transition-colors">Funciones</a>
                    <a href="#Referencias" className="text-gray-600 hover:text-blue-600 hover:bg-gray-50 p-2 rounded transition-colors">Referencias</a>
                </div>
                
                <div className="w-full md:w-5/6">
                    {page === 0 ?<div>
                        <h1 id="inicio" className="titulo-principal">Introducción</h1>
                        <h2 className="subtitulo">¿Qué es Arduino?</h2>
                        <p className="parrafo">
                            Arduino es una plataforma de desarrollo basada en una placa electrónica de hardware libre
                            que incorpora un microcontrolador re-programable y una serie de pines hembra. Estos
                            permiten establecer conexiones entre el microcontrolador y los diferentes sensores y
                            actuadores de una manera muy sencilla (principalmente con cables dupont) (Aguayo, 2014).
                        </p>
                        <h1 id="Titulo2" className="titulo-principal">Arduino UNO</h1>
                        <h2 className="subtitulo">¿Qué es Arduino UNO?</h2>
                        <p className="parrafo">
                            La placa Arduino UNO es la mejor placa para iniciar con la programación y la electrónica.
                            Si es tu primera experiencia con la plataforma Arduino, la Arduino UNO es la opción más
                            robusta, más usada y con mayor cantidad de documentación de toda la familia Arduino.
                            <br /><br />
                            Arduino UNO es una placa basada en el microcontrolador ATmega328P. Tiene 14 pines de
                            entrada/salida digital (de los cuales 6 pueden ser usados con PWM), 6 entradas analógicas,
                            un cristal de 16 MHz, conexión USB, conector jack de alimentación, terminales para conexión
                            ICSP y un botón de reseteo. Tiene toda la electrónica necesaria para que el microcontrolador
                            opere, simplemente hay que conectarlo a la energía por el puerto USB o con un transformador
                            AC-DC (Aguayo, 2019).
                        </p>
                        <div className="contenedor-imgen">
                            <img src="/arduino_img/arduinop1/arduino.png" className="w-full md:w-1/2 h-auto"  alt="Placa Arduino UNO" />
                        </div>
                        <p> 
                            Enlace: 
                            <a 
                                href="https://www.circuito.io/blog/arduino-uno-pinout/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-blue-500 underline hover:text-blue-700">
                                    Pines de arduino
                            </a>
                        </p>
                        <h1 id="Titulo3" className="titulo-principal">Wokwi</h1>
                        <p className="parrafo">
                            Para aprender a trabajar con Arduino utilizaremos el simulador Wokwi que es una plataforma online:
                        </p>
                        <div className="contenedor-imgen">
                            <img src="/arduino_img/arduinop1/sitio.png" className="w-full md:w-1/2 h-auto"  alt="Sitio" />
                        </div>
                        <p> 
                            Enlace: 
                            <a 
                                href="https://wokwi.com/arduino" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-blue-500 underline hover:text-blue-700">
                                    Wokwi
                            </a>
                        </p>
                        <p className="parrafo">
                            En la parte de abajo encontraremos lo siguiente.
                        </p>
                        <div className="contenedor-imgen">
                            <img src="/arduino_img/arduinop1/mesas.png" className="w-full md:w-1/2 h-auto"  alt="Mesas de trabajo" />
                        </div>
                        <p className="parrafo">
                            Y accederemos al Arduino UNO para comenzar.
                        </p>
                        <div className="contenedor-imgen">
                            <img src="/arduino_img/arduinop1/simulador.png" className="w-full md:w-1/2 h-auto"  alt="Simulador" />
                        </div>
                        <p className="parrafo">
                            En el simulador tenemos dos partes.
                        </p>
                        <p className="parrafo">
                            El editor de código.
                        </p>
                        <div className="contenedor-imgen">
                            <img src="/arduino_img/arduinop1/codigo.png" className="w-full md:w-1/2 h-auto"  alt="Código" />
                        </div>
                        <p className="parrafo">
                            Y el simulador:
                        </p>
                        <div className="contenedor-imgen">
                            <img src="/arduino_img/arduinop1/placa.png" className="w-full md:w-1/2 h-auto"  alt="Placa" />
                        </div>
                        <h2 className="subtitulo">Partes del código</h2>
                        <p className="parrafo">
                            En la programación con Arduino tenemos dos funciones principales.
                        </p>
                        <p className="parrafo">
                            Primero tenemos el:
                        </p>
                        <div className="contenedor-imgen">
                            <img src="/arduino_img/arduinop1/setup.png" className="w-full md:w-1/2 h-auto"  alt="Setup" />
                        </div>
                        <p className="parrafo">
                            Hace referencia a que todo lo que escribamos aquí se va a ejecutar solo una vez, esta función normalmente se ocupa para las configuraciones iniciales.
                        </p>
                        <p className="parrafo">
                            Y después tenemos el:
                        </p>
                        <div className="contenedor-imgen">
                            <img src="/arduino_img/arduinop1/loop.png" className="w-full md:w-1/2 h-auto"  alt="Loop" />
                        </div>
                        <p className="parrafo">
                            Esta función se ejecutará después del void setup(), y se ejecutará todo el tiempo a diferencia del anterior que solo se ejecuta una vez.
                        </p> 
                    </div> : null}
                    {page === 1 ?
                        <Arduino001P01Component />
                    : null}
                    {page === 2 ?
                        <Arduino001P02Component />
                    : null}
                    {page === 3 ?
                        <Arduino001P03Component />
                    : null}
                    {page === 4 ?
                        <Arduino001P04Component />
                    : null}
                    {page === 5 ?
                        <Arduino001P05Component />
                    : null}
                    {page === 6 ?
                        <Arduino001P06Component />
                    : null}

                    <h1 id="Referencias" className="titulo-principal">Referencias</h1>
                    <div className="flex flex-col gap-2 text-gray-600 text-sm">
                        <p>
                            Aguayo, P. (2014, noviembre 20). ¿Qué es Arduino? Arduino.cl - Compra tu Arduino en Línea; Arduino.cl. <a href="https://arduino.cl/que-es-arduino/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://arduino.cl/que-es-arduino/</a>
                        </p>
                        <p>
                            Aguayo, P. (2019, enero 14). Arduino UNO. Arduino.cl - Compra tu Arduino en Línea; Arduino.cl. <a href="https://arduino.cl/arduino-uno/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://arduino.cl/arduino-uno/</a>
                        </p>
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

export default Arduino001;