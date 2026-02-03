import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function Arduino001P09Component() {
const codigo1 = 
`if(8>5 && 2>5){
    //Se cumple la condición
}`;

const codigo2 = 
`if(8>5 || 2>5){
    //Se cumple la condición
}`;

const codigo3 = 
`if(!false){
    //Se cumple la condición
}`;

    return (
        <>
        <h1 id="inicio" className="titulo-principal">Práctica 9: Operadores lógicos</h1>
        <p className="texto-parrafo">
            Los operadores lógicos permiten evaluar dos o más expresiones de manera simultánea y 
            devolver un resultado booleano. Dependiendo del operador utilizado (AND, OR o NOT), se 
            ejecutará la tabla de verdad correspondiente.
        </p>
        <h2 className="subtitulo">El operador AND</h2>
        <p className="texto-parrafo">
            El operador AND, también conocido como “y”, consiste en que cuando ambas expresiones se cumplen, 
            devolverá un valor verdadero; de lo contrario, devolverá falso. <br />
            <strong>Ejemplo:</strong><br /> <br />
            A sería una expresión y B otra; dependiendo de si se cumplen o no, se genera el resultado (X).
        </p>
        <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3">A</th>
                    <th scope="col" className="px-6 py-3">B</th>
                    <th scope="col" className="px-6 py-3">X</th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium align-top">FALSE</td>
                    <td className="px-6 py-4 text-justify">FALSE</td>
                    <td className="px-6 py-4 font-medium align-top">FALSE</td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium align-top">FALSE</td>
                    <td className="px-6 py-4 text-justify">TRUE</td>
                    <td className="px-6 py-4 font-medium align-top">FALSE</td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium align-top">TRUE</td>
                    <td className="px-6 py-4 text-justify">FALSE</td>
                    <td className="px-6 py-4 font-medium align-top">FALSE</td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium align-top">TRUE</td>
                    <td className="px-6 py-4 text-justify">TRUE</td>
                    <td className="px-6 py-4 font-medium align-top">TRUE</td>
                </tr>
            </tbody>
        </table>
        <br />
        <p className="texto-parrafo">
            ¿Qué quiere decir que en una condición utilizamos el operador AND (&&)?<br /> <br />
            <strong>Por ejemplo: </strong>
        </p>
        <SyntaxHighlighter language="cpp" style={oneDark}>
            {codigo1}
        </SyntaxHighlighter>
        <p className="texto-parrafo">
            En este caso, la expresión A es verdadera porque 8 es mayor que 5, mientras que la expresión B 
            es falsa porque 2 no es mayor que 5. <br />
            Debido a que el operador AND requiere que ambas expresiones se cumplan, el resultado (X) será false.
        </p>
        <br />
         <h2 className="subtitulo">El operador OR</h2>
        <p className="texto-parrafo">
            El operador OR, también conocido como “o”, consiste en que cuando al menos una de las expresiones 
            se cumple, el resultado será verdadero. <br />
            <strong>Ejemplo:</strong><br /> <br />
            A sería una expresión y B otra; dependiendo de si se cumplen o no, se genera el resultado (X).
        </p>
        <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3">A</th>
                    <th scope="col" className="px-6 py-3">B</th>
                    <th scope="col" className="px-6 py-3">X</th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium align-top">FALSE</td>
                    <td className="px-6 py-4 text-justify">FALSE</td>
                    <td className="px-6 py-4 font-medium align-top">FALSE</td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium align-top">FALSE</td>
                    <td className="px-6 py-4 text-justify">TRUE</td>
                    <td className="px-6 py-4 font-medium align-top">TRUE</td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium align-top">TRUE</td>
                    <td className="px-6 py-4 text-justify">FALSE</td>
                    <td className="px-6 py-4 font-medium align-top">TRUE</td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium align-top">TRUE</td>
                    <td className="px-6 py-4 text-justify">TRUE</td>
                    <td className="px-6 py-4 font-medium align-top">TRUE</td>
                </tr>
            </tbody>
        </table>
        <br />
        <p className="texto-parrafo">
            ¿Qué quiere decir que en una condición utilizamos el operador OR (||)?<br /> <br />
            <strong>Por ejemplo: </strong>
        </p>
        <SyntaxHighlighter language="cpp" style={oneDark}>
            {codigo2}
        </SyntaxHighlighter>
        <p className="texto-parrafo">
            En este caso, la expresión A es verdadera porque 8 es mayor que 5, mientras que la expresión B es 
            falsa porque 2 no es mayor que 5. <br />
            Debido a que el operador OR requiere que solo una expresión se cumpla, el resultado (X) será true.
        </p>
        <br />
        <h2 className="subtitulo">El operador NOT</h2>
        <p className="texto-parrafo">
            El operador NOT, también conocido como “negación”, consiste en la negación del valor de una expresión.<br />
            <strong>Ejemplo:</strong><br /> <br />
            A sería una expresión y X corresponde a su negación.
        </p>
        <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3">A</th>
                    <th scope="col" className="px-6 py-3">X</th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium align-top">FALSE</td>
                    <td className="px-6 py-4 text-justify">TRUE</td>
                </tr>
               <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium align-top">TRUE</td>
                    <td className="px-6 py-4 text-justify">FALSE</td>
                </tr>
            </tbody>
        </table>
        <br />
        <p className="texto-parrafo">
            ¿Qué quiere decir que en una condición utilizamos el operador NOT (!)?<br /> <br />
            <strong>Por ejemplo: </strong>
        </p>
        <SyntaxHighlighter language="cpp" style={oneDark}>
            {codigo3}
        </SyntaxHighlighter>
        <p className="texto-parrafo">
            En este caso, se está negando un valor false, el cual se convierte en true, por lo 
            que se ejecuta el bloque de código dentro de la condición. <br />
            Estos operadores se utilizan cuando se necesitan considerar más de dos respuestas, 
            por ejemplo, la validación de correo y contraseña, cuando se utiliza alguno de los 
            valores o se necesita negar algún resultado.
        </p>
        </>
    )
}

export default Arduino001P09Component;