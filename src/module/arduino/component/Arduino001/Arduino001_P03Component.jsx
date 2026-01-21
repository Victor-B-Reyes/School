import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function Arduino001P03Component() {
const codigo1 = 
`void setup() {
  Serial.begin(9600);
}

void loop() {
    Serial.println(5+2);
    delay(5000);
}`;

const codigo2 = 
`void setup() {
  Serial.begin(9600);
}

void loop() {
    int Numero1 = 5;
    int Numero2 = 2;
    int Resultado = Numero1 + Numero2;
    Serial.println(Resultado);
    delay(5000);
}`;

const codigo3 = 
`void setup() {
  Serial.begin(9600);
}

void loop() {
    int Numero1 = 5;
    int Numero2 = 2;
    int Resultado = Numero1 + Numero2;
    Serial.print("Resultado de la suma es: ");
    Serial.println(Resultado);
    delay(5000);
}`;
    return (
        <>
        <h1 id="inicio" className="text-2xl font-bold text-gray-800 mb-4 pt-2">Práctica 3: Estructuras con operadores;</h1>
        <p className="text-gray-700 text-justify mb-8 leading-relaxed">
            Para realizar las operaciones necesitamos saber los operadores más utilizados
        </p>
        <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3">Nombre</th>
                    <th scope="col" className="px-6 py-3">Signo</th>
                    <th scope="col" className="px-6 py-3">Uso</th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium align-top">Suma</td>
                    <td className="px-6 py-4 text-justify"> + </td>
                    <td className="px-6 py-4 font-medium align-top"> Numero1 + Numero2</td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium align-top">Resta</td>
                    <td className="px-6 py-4 text-justify"> - </td>
                    <td className="px-6 py-4 font-medium align-top"> Numero1 - Numero2</td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium align-top">Multiplicación</td>
                    <td className="px-6 py-4 text-justify"> * </td>
                    <td className="px-6 py-4 font-medium align-top"> Numero1 * Numero2</td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium align-top">División</td>
                    <td className="px-6 py-4 text-justify"> / </td>
                    <td className="px-6 py-4 font-medium align-top"> Numero1 / Numero2</td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium align-top">Módulo</td>
                    <td className="px-6 py-4 text-justify"> % </td>
                    <td className="px-6 py-4 font-medium align-top"> Numero1 % Numero2</td>
                </tr>
            </tbody>
        </table>
        <p className="text-gray-700 text-justify mb-8 leading-relaxed">
            Para esto podemos trabajar de dos formas <br />
            La operación mostrarla por consola
        </p>
        <SyntaxHighlighter language="cpp" style={oneDark}>
            {codigo1}
        </SyntaxHighlighter>
        <p className="text-gray-700 text-justify mb-8 leading-relaxed">
            Declarar una variable y asignarle un valor
        </p>
        <SyntaxHighlighter language="cpp" style={oneDark}>
            {codigo2}
        </SyntaxHighlighter>
        <p className="text-gray-700 text-justify mb-8 leading-relaxed">
            ¿Cuál es la diferencia? <br />
            El método de realizarlo, cualquiera de los dos métodos es correcto,
            pero lo adecuado es trabajar con variables. <br />
            Ya que cuando se un proyecto más grande ocuparemos más datos. <br />
            La primera variable que tenemos es
        </p>
        <SyntaxHighlighter language="cpp" style={oneDark}>
            {'int Numero1 = 5;'}
        </SyntaxHighlighter>
        <p className="text-gray-700 text-justify mb-8 leading-relaxed">
            En este caso es un tipo de dato entero y su nombre será Numero1 (Tenemos que recordar
            que pude ser asignado cualquier nombre), y tiene el valor de 5. <br />
            Lo mismo pasa en
        </p>
        <SyntaxHighlighter language="cpp" style={oneDark}>
            {'int Numero2 = 2;'}
        </SyntaxHighlighter>
        <p className="text-gray-700 text-justify mb-8 leading-relaxed">
            La siguiente es la variable de resultado que lo que hace es almacenar la suma de Numero1
            + Numero2
        </p>
        <SyntaxHighlighter language="cpp" style={oneDark}>
            {'int Resultado = Numero1 + Numero2;'}
        </SyntaxHighlighter>
        <p className="text-gray-700 text-justify mb-8 leading-relaxed">
            Y por último imprimimos la variable de resultado
        </p>
        <SyntaxHighlighter language="cpp" style={oneDark}>
            {'Serial.println(Resultado);'}
        </SyntaxHighlighter>
        <p className="text-gray-700 text-justify mb-8 leading-relaxed">
            Siguiendo la siguiente estructura, que lo que hace en la línea 9 es mostrar un mensaje
            (Resultado de la suma es: ) sin dar un saldo de línea, y en la 10 muestra el valor de la suma,
            pero añade un salto de línea.
        </p>
        <SyntaxHighlighter language="cpp" style={oneDark}>
            {codigo3}
        </SyntaxHighlighter>

        </>
    )
}

export default Arduino001P03Component;