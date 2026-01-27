import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function Arduino001P08Component() {
const codigo1 = 
`void setup() {
  Serial.begin(9600);
}

void loop() {
  int i = 0;
  // Ciclo while: se ejecuta mientras la condición (i <= 10) sea verdadera
  while(i <= 10){
    Serial.println(i);
    i++; // Incremento para evitar bucle infinito
    delay(1000);
  }
  Serial.println("Terminó el ciclo while");
  delay(5000);
}`;

const codigo2 = 
`void setup() {
  Serial.begin(9600);
}

void loop() {
  int i = 0;
  // Ciclo do-while: se ejecuta al menos una vez
  do{
    Serial.println(i);
    i++;
    delay(1000);
  }while(i <= 10);
  Serial.println("Terminó el ciclo do while");
  delay(5000);
}`;

    return (
        <>
        <h1 id="inicio" className="titulo-principal">Práctica 8: While y Do While</h1>
        <p className="parrafo">
            Los ciclos <strong>while</strong> y <strong>do while</strong> permiten repetir un bloque de código mientras se cumpla una condición.
            A diferencia del ciclo <code>for</code>, estos ciclos se utilizan a menudo cuando no sabemos de antemano cuántas veces se repetirá el código.
        </p>
        <p className="parrafo">
            <strong>Ciclo While:</strong><br />
            Evalúa la condición al principio. Si la condición es falsa desde el inicio, el código dentro del ciclo nunca se ejecutará.
            <br />
            Sintaxis: <code>while(condición) {'{ ... }'}</code>
        </p>
        <SyntaxHighlighter language="cpp" style={oneDark}>
            {codigo1}
        </SyntaxHighlighter>
        
        <p className="parrafo">
            <strong>Ciclo Do While:</strong><br />
            Evalúa la condición al final. Esto garantiza que el bloque de código se ejecute <strong>al menos una vez</strong>, incluso si la condición es falsa.
            <br />
            Sintaxis: <code>do {'{ ... }'} while(condición);</code>
        </p>
        <SyntaxHighlighter language="cpp" style={oneDark}>
            {codigo2}
        </SyntaxHighlighter>
        </>
    )
}

export default Arduino001P08Component;