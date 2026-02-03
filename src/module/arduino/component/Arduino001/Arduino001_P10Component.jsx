import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function Arduino001P10Component() {
    const codigo1 = 
`case 25:
    //entre el case y break se ejecuta el código
    Serial.println("El valor es 25");
    break;`;

    return (
        <>
        <h1 id="inicio" className="titulo-principal">Práctica 10 Arduino: Switch case</h1>
        <p className="parrafo">
           La sentencia switch case es una estructura de control de flujo, al igual que if-else, 
           pero la expresión se evalúa una sola vez y permite elegir el caso correspondiente.        
        </p>
         <div className="contenedor-imgen">
            <img src="/arduino_img/arduinop1/Switch.png" className="w-full md:w-1/2 h-auto"  alt="Código" />
        </div>
        <p className="parrafo">
            Se utiliza cuando se conocen todos los casos posibles, permitiendo ejecutar una acción 
            específica para cada valor. La estructura switch case mejora la claridad del código y 
            facilita su lectura en comparación con múltiples sentencias if-else, especialmente cuando 
            se trabaja con varias opciones definidas.
        </p>
        <SyntaxHighlighter language="cpp" style={oneDark}>
            {codigo1}
        </SyntaxHighlighter>
        <p className="parrafo">
            Es importante mencionar la sentencia <strong>break</strong>, que sirve para salir del switch. 
            Si no se coloca, el programa seguirá ejecutando los casos siguientes aunque no coincidan.
            <br />
            También existe la sentencia <strong>default</strong>, que se ejecuta si el valor no coincide 
            con ninguno de los casos definidos.
        </p>
        </>
    )
}

export default Arduino001P10Component;