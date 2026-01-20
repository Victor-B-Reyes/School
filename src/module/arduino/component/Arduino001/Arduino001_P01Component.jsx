import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function Arduino001P01Component() {
    const codigo1 = 
`void setup() {
  Serial.begin(9600);
}`;

const codigo2 = 
`void setup() {
  Serial.begin(9600);
  Serial.println("Hola Mundo desde el setup");
}

void loop() {
  Serial.println("Hola Mundo desde el loop");
}`;

const codigo3 = 
`void setup() {
  Serial.begin(9600);
  Serial.println("Hola Mundo desde el setup");
}

void loop() {
  Serial.println("Hola Mundo desde el loop");
  delay(5000);
}`;
    return (
        <>
        <h1 id="Titulo4" className="text-2xl font-bold text-gray-800 mb-4 pt-2">Práctica 1 Arduino: configuración y el primer “hola mundo”</h1>
        <p className="text-gray-700 text-justify mb-8 leading-relaxed">
            La primera configuración que se realiza es la del Serial.begin <br />
            “Establece la velocidad de datos en bits por segundo (baud) para la transmisión de datos en serie.
            Para comunicarse con la computadora, use una de estas velocidades: 300, 600, 1200, 2400, 4800, 9600, 14400, 19200, 28800, 38400, 57600 o 115200” (Serial.Begin(), s/f).
        </p>
        <p className="text-gray-700 text-justify mb-8 leading-relaxed">
            Que en pocas palabras sirve para la velocidad de transmisión en serie.
            Para efectos prácticos ocuparemos la velocidad de 9600 y lo asignaremos al void setup().
        </p>
        <SyntaxHighlighter language="cpp" style={oneDark}>
            {codigo1}
        </SyntaxHighlighter>
        <p className="text-gray-700 text-justify mb-8 leading-relaxed">
            En este caso solo asignamos la velocidad. Para poder visualizar un mensaje por consola lo haremos con 
            Serial.print o Serial.println; la diferencia es que Serial.print manda el mensaje corrido y Serial.println 
            da un salto de línea entre cada mensaje mostrado. <br />
            Para el ejemplo utilizaremos el Serial.println para que sea más fácil leerlo.
            Mostraremos un mensaje desde el setup() y otro desde el loop().
        </p>
        <SyntaxHighlighter language="cpp" style={oneDark}>
            {codigo2}
        </SyntaxHighlighter>
        <p className="text-gray-700 text-justify mb-8 leading-relaxed">
            Si corremos la simulación 
        </p>
        <div className="flex justify-center items-center">
            <img src="/arduino_img/arduinop1/start.png" className="w-1/2 md:w-1/6 h-auto"  alt="Start" />
        </div>
        <p className="text-gray-700 text-justify mb-8 leading-relaxed">
            Notaremos que la consola manda mensajes por microsegundos <br />
            Y todos dicen 
        </p>
        <SyntaxHighlighter language="shell" style={oneDark}>
            {'Hola mundo desde el loop'}
        </SyntaxHighlighter>
        <p className="text-gray-700 text-justify mb-8 leading-relaxed">
            Para que no se envíen tan rápido añadiremos un delay() <br />
            “Pausa el programa por la cantidad de tiempo (en milisegundos) especificado como parámetro. 
            (Hay 1000 milisegundos en un segundo.)” (Delay(), s/f). 
        </p>
        <SyntaxHighlighter language="cpp" style={oneDark}>
            {codigo3}
        </SyntaxHighlighter>
        <p className="text-gray-700 text-justify mb-8 leading-relaxed">
            En este caso añadimos un delay(5000); lo que equivale a 5 segundos <br />
            Si ponemos 6000 serán 6 segundos de espera.
        </p>
        </>
    )
}

export default Arduino001P01Component;