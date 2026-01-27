import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function Arduino001P07Component() {
const codigo1 = 
`void setup() {
  Serial.begin(9600);
}

void loop() {
  // Estructura del ciclo for:
  // for (inicialización; condición; incremento)
  for(int i = 0; i <= 10; i++){
    Serial.println(i);
    delay(1000);
  }
  Serial.println("Terminó el ciclo for");
  delay(5000);
}`;

    return (
        <>
        <h1 id="inicio" className="titulo-principal">Práctica 7: Ciclo For</h1>
        <p className="parrafo">
            El <strong>ciclo for</strong> (o ciclo para) permite ejecutar un bloque de código un número determinado de veces. 
            A diferencia de otras estructuras de control, el <code>for</code> agrupa la inicialización, la condición y la actualización en una sola línea, lo que lo hace ideal para recorrer secuencias o realizar conteos.
        </p>
        <div className="contenedor-imgen">
            <img src="/arduino_img/arduinop1/for.png" className="w-full md:w-3/4 h-auto"  alt="Estructura del ciclo for" />
        </div>
        <p className="parrafo">
            El ciclo se compone de tres partes principales dentro de los paréntesis:
            <br /><br />
            <strong>1. Inicialización:</strong> Se ejecuta una sola vez al principio del ciclo. Aquí se suele declarar e inicializar la variable de control (en el ejemplo, <code>int i = 0</code>).
            <br />
            <strong>2. Condición:</strong> Se evalúa antes de cada iteración. Si la condición es verdadera (<code>true</code>), el código dentro del ciclo se ejecuta. Si es falsa, el ciclo termina (ej. <code>i &lt;= 10</code>).
            <br />
            <strong>3. Incremento/Decremento:</strong> Se ejecuta al final de cada vuelta del ciclo. Aquí se actualiza la variable de control (ej. <code>i++</code> aumenta el valor de <code>i</code> en 1).
            <br /><br />
            En el siguiente código, veremos cómo imprimir los números del 0 al 10 en el monitor serie:
        </p>
        <SyntaxHighlighter language="cpp" style={oneDark}>
            {codigo1}
        </SyntaxHighlighter>
        </>
    )
}

export default Arduino001P07Component;