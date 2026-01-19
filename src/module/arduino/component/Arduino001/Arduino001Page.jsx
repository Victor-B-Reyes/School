

function Arduino001(){
    return(
        <div className="w-full rounded-lg shadow-2xl bg-white p-5">
            <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/6 flex flex-col gap-2 sticky top-4 h-fit border-r border-gray-200 pr-4">
                    <span className="font-bold text-gray-700 mb-2">Índice</span>
                    <a href="Arduino_intro" className="text-gray-600 hover:text-blue-600 hover:bg-gray-50 p-2 rounded transition-colors">¿Qué es?</a>
                    <a href="#Titulo2" className="text-gray-600 hover:text-blue-600 hover:bg-gray-50 p-2 rounded transition-colors">Arduino UNO</a>
                    <a href="#Referencias" className="text-gray-600 hover:text-blue-600 hover:bg-gray-50 p-2 rounded transition-colors">Referencias</a>
                </div>
                <div className="w-full md:w-5/6">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4 pt-2">¿Qué es arduino?</h1>
                    <p className="text-gray-700 text-justify mb-8 leading-relaxed">
                        Arduino es una plataforma de desarrollo basada en una placa electrónica de hardware libre
                        que incorpora un microcontrolador re-programable y una serie de pines hembra. Estos
                        permiten establecer conexiones entre el microcontrolador y los diferentes sensores y
                        actuadores de una manera muy sencilla (principalmente con cables dupont) (Aguayo, 2014).
                    </p>
                    <h1 id="Titulo2" className="text-2xl font-bold text-gray-800 mb-4 pt-2">Arduino uno</h1>
                    <h2 className="text-xl font-semibold text-gray-700 mb-3">¿Qué es arduino uno?</h2>
                    <p className="text-gray-700 text-justify mb-8 leading-relaxed">
                        La placa Arduino UNO es la mejor placa para iniciar con la programación y la electrónica.
                        Si es tu primera experiencia con la plataforma Arduino, la Arduino UNO es la opción mas
                        robusta, mas usada y con mayor cantidad de documentación de toda la familia Arduino.
                        <br /><br />
                        Arduino UNO es una placa basada en el microcontrolador ATmega328P. Tiene 14 pines de
                        entrada/salida digital (de los cuales 6 pueden ser usando con PWM), 6 entradas analógicas,
                        un cristal de 16Mhz, conexión USB, conector jack de alimentación, terminales para conexión
                        ICSP y un botón de reseteo. Tiene toda la electrónica necesaria para que el microcontrolador
                        opere, simplemente hay que conectarlo a la energía por el puerto USB ó con un transformador
                        AC-DC (Aguayo, 2019).
                    </p>
                    <div className="flex justify-center items-center">
                        <img src="/arduino_img/arduinop1/arduino.png" alt="Placa Arduino UNO" className="w-full md:w-1/2 h-auto" />
                    </div>
                    
                    <h1 id="Referencias" className="text-2xl font-bold text-gray-800 mb-4 pt-2">Referencias</h1>
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
            
           
       </div>
    )
}

export default Arduino001;