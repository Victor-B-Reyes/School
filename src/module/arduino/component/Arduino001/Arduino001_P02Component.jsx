import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function Arduino001P02Component() {
const codigo1 = 
`void setup() {
  Serial.begin(9600);
}

void loop() {
}`;

const codigo2 = 
`void setup() {
  Serial.begin(9600);
}

void loop() {
    int numEntero = 1589;
}`;

const codigo3 = 
`void setup() {
  Serial.begin(9600);
}

void loop() {
    int numEntero = 1589;
    Serial.println(numEntero);
    delay(5000);
}`;
    return (
        <>
        <h1 id="inicio" className="titulo-principal">Práctica 2: Variables</h1>
        <p className="parrafo">
            En la segunda práctica trabajaremos con variables. <br />
            Trabajaremos en la función loop().
        </p>
        <SyntaxHighlighter language="cpp" style={oneDark}>
            {codigo1}
        </SyntaxHighlighter>
        <p className="parrafo">
            Tenemos diferentes tipos de datos
        </p>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-8">
        <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3">Nombre</th>
                    <th scope="col" className="px-6 py-3">Descripción</th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap align-top">byte</td>
                    <td className="px-6 py-4 text-justify">Almacena un rango numérico de 8 bits sin decimales. Su rango es de 0 a 255.<br /> 
                    <span className="text-red-700">byte </span>
                    <span className="text-blue-700">variableEntrada </span>
                    <span className="text-green-700">= 180;</span>
                    </td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap align-top">int</td>
                    <td className="px-6 py-4 text-justify">Valor numérico entero, este puede ser tanto un número positivo como negativo, pero nunca decimal.<br /> 
                    <span className="text-red-700">int </span>
                    <span className="text-blue-700">numEntero </span>
                    <span className="text-green-700">= 1589;</span> <br />
                    <span className="text-red-700">int </span>
                    <span className="text-blue-700">numEntero </span>
                    <span className="text-green-700">= -1589;</span>
                    </td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap align-top">float</td>
                    <td className="px-6 py-4 text-justify">Valor numérico decimal, estos pueden contener números enteros como decimales.<br /> 
                    <span className="text-red-700">float </span>
                    <span className="text-blue-700">numDecimal </span>
                    <span className="text-green-700">= 5.23; </span>
                    </td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap align-top">long</td>
                    <td className="px-6 py-4 text-justify">Se utiliza para el caso de que se usen números con tamaños muy altos, esto ayuda al tiempo de ejecución.<br /> 
                    <span className="text-red-700">long </span>
                    <span className="text-blue-700">numLargo </span>
                    <span className="text-green-700">= 900000; </span>
                    </td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap align-top">char</td>
                    <td className="px-6 py-4 text-justify">Almacena solo un carácter; estos pueden ser letras y deben ir entre comillas simples ' '.<br /> 
                    <span className="text-red-700">char </span>
                    <span className="text-blue-700">letra </span>
                    <span className="text-green-700">= 'a';</span> <br />
                    <span className="text-red-700">char </span>
                    <span className="text-blue-700">letraDos </span>
                    <span className="text-green-700">= '2';</span>
                    </td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap align-top">String</td>
                    <td className="px-6 py-4 text-justify">Este a diferencia del char, almacena más de un carácter por lo que podemos almacenar frases.<br /> 
                    <span className="text-red-700">String </span>
                    <span className="text-blue-700">frase </span>
                    <span className="text-green-700">= "Hola a todos"; </span>
                    </td>
                </tr>
            </tbody>
        </table>
        <br />
        <p className="parrafo">
            La sintaxis para declarar una variable es:
        </p>
        <p className="parrafo">
            <span className="text-red-700">Tipo_dato </span>
            <span className="text-blue-700">nombre  </span>
            <span className="text-green-700">= valor; </span>
        </p>
        <p className="parrafo">
            Para declarar una variable de tipo numérico, sería:
        </p>
        <SyntaxHighlighter language="cpp" style={oneDark}>
            {codigo2}
        </SyntaxHighlighter>
        <p className="parrafo">
            Y para poder verla en la consola:
        </p>
        <SyntaxHighlighter language="cpp" style={oneDark}>
            {codigo3}
        </SyntaxHighlighter>

        </div>
        </>
    )
}

export default Arduino001P02Component;