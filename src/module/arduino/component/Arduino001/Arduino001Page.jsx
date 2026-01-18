function Arduino001(){
    return(
        <div className="w-full rounded-lg shadow-2xl bg-white p-5">
            <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/6 flex flex-col gap-2 sticky top-4 h-fit border-r border-gray-200 pr-4">
                    <span className="font-bold text-gray-700 mb-2">Índice</span>
                    <a href="#Titulo1" className="text-gray-600 hover:text-blue-600 hover:bg-gray-50 p-2 rounded transition-colors">¿Qué es?</a>
                    <a href="#Titulo2" className="text-gray-600 hover:text-blue-600 hover:bg-gray-50 p-2 rounded transition-colors">Arduino</a>
                    <a href="#Titulo3" className="text-gray-600 hover:text-blue-600 hover:bg-gray-50 p-2 rounded transition-colors">Referencias</a>
                </div>
                <div className="w-full md:w-5/6">
        <div className="px-6 w-full">
            <h2 className="py-2 text-lg font-semibold" id="Titulo1">¿Qué es arduino?</h2>
            <p className="text-justify">Arduino es una plataforma de desarrollo basada en una placa electrónica de hardware libre que incorpora un microcontrolador re-programable y una serie de pines hembra. Estos permiten establecer conexiones entre el microcontrolador y los diferentes sensores y actuadores de una manera muy sencilla (principalmente con cables dupont) (Aguayo, 2014).</p>
            <h2 className="py-4 text-lg font-semibold">Arduino</h2>
            <h3 className="py-1 text-base font-semibold" id="Titulo2">¿Qué es arduino?</h3>
            <p className="text-justify"> La placa Arduino UNO es la mejor placa para iniciar con la programación y la electrónica. Si es tu primera experiencia con la plataforma Arduino, la Arduino UNO es la opción mas robusta, mas usada y con mayor cantidad de documentación de toda la familia Arduino.<br />
                Arduino UNO es una placa basada en el microcontrolador ATmega328P. Tiene 14 pines de entrada/salida digital (de los cuales 6 pueden ser usando con PWM), 6 entradas analógicas, un cristal de 16Mhz, conexión USB, conector jack de alimentación, terminales para conexión ICSP y un botón de reseteo. Tiene toda la electrónica necesaria para que el microcontrolador opere, simplemente hay que conectarlo a la energía por el puerto USB ó con un transformador AC-DC (Aguayo, 2019).</p><br />
            <div className="flex justify-center items-center">
                
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
            <h2 className="py-4 text-lg font-semibold">Wokwi</h2>
            <p className="text-justify"> Para aprender a trabajar con arduino utilizaremos el simulador  wokwi que es una plataforma online:</p>
            <div className="flex justify-center items-center">
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
            <p className="text-justify">En la parte de abajo encontraremos lo siguiente </p>
            <div className="flex justify-center items-center">
                
            </div>
            <p className="text-justify">Y accederemos al arduino uno para comenzar:</p>
            <div className="flex justify-center items-center">
                
            </div>
            <p className="text-justify"> En el simulador tenemos dos partes:<br /> El editor de código:</p>
            <div className="flex justify-center items-center">
                
            </div>
            <p className="text-justify">Y el simulador:</p>
            <div className="flex justify-center items-center">
                
            </div>
            <h3 className="py-1 text-base font-semibold">Partes del código</h3>
            <p className="text-justify">En la programación con arduino tenemos dos funciones principales. <br />Primero tenemos el:</p>
            <div className="flex justify-center items-center">
                
            </div>
            <p className="text-justify">Que hace referencia que todo lo que escribamos aquí se va a correr solo una vez, esta función normalmente se ocupa para las configuraciones. <br />Y después tenemos el:</p>
            <div className="flex justify-center items-center">
               
            </div>
            <p className="text-justify">Esta función se ejecutara después del void setup(), y realizara todo el tiempo a diferencia del anterior que solo se ejecuta una vez.</p>

            <h2 className="py-2 text-lg font-semibold" id="Titulo3">Referencias</h2>
            Aguayo, P. (2014, noviembre 20). ¿Qué es Arduino? Arduino.cl - Compra tu Arduino en Línea; Arduino.cl. 
            <a 
                    href="https://arduino.cl/que-es-arduino/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-500 underline hover:text-blue-700">
                        https://arduino.cl/que-es-arduino/
            </a><br />
            Aguayo, P. (2019, enero 14). Arduino UNO. Arduino.cl - Compra tu Arduino en Línea; Arduino.cl. 
            <a 
                    href="https://arduino.cl/arduino-uno/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-500 underline hover:text-blue-700">
                        https://arduino.cl/arduino-uno/
            </a>
        </div>

                </div>

            </div>
            
           
       </div>
    )
}

export default Arduino001;