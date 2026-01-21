import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function Arduino001P04Component() {
const codigo1 = 
`void setup() {
  Serial.begin(9600);
}

void loop() {
    int calificacion = 8;
    if(calificacion >= 7 )
    delay(5000);
}`;

const codigo2 = 
`if(calificacion >= 7 ){

}`;

const codigo3 = 
`void setup() {
  Serial.begin(9600);
}

void loop() {
    int calificacion = 8;
    if(calificacion >= 7 ){
      Serial.println("Alumno aprobado");
    }
    delay(5000);
}`;

const codigo4 = 
`void setup() {
  Serial.begin(9600);
}

void loop() {
    int calificacion = 8;
    if(calificacion >= 7 ){
      Serial.println("Alumno aprobado");
    }else{
      Serial.println("Alumno reprobado");
    }
    delay(5000);
}`;

const codigo5 = 
`void setup() {
  Serial.begin(9600);
}

void loop() {
    int calificacion = 6;
    if(calificacion >= 7 ){
      Serial.println("Alumno aprobado");
    }else{
      Serial.println("Alumno reprobado");
    }
    delay(5000);
}`;
const codigo6 = 
`if(condición){
  Bloque de código si se cumple la condición
}else{
  Bloque de código si no se cumple la condición
}`;
    return (
        <>
        <h1 id="inicio" className="text-2xl font-bold text-gray-800 mb-4 pt-2">Práctica 4: Estructuras con comparadores</h1>
        <p className="text-gray-700 text-justify mb-8 leading-relaxed">
            Los comparadores permiten realizar una comparación entre dos cosas (sean números, letras, u objetos, etc.),
            normalmente se utilizan en condicionales.
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
                    <td className="px-6 py-4 font-medium align-top">No es igual</td>
                    <td className="px-6 py-4 text-justify"> != </td>
                    <td className="px-6 py-4 font-medium align-top"> Variable1 != Variable2</td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium align-top">Mayor que</td>
                    <td className="px-6 py-4 text-justify"> <span>&gt;</span> </td>
                    <td className="px-6 py-4 font-medium align-top"> Variable1 <span>&gt;</span> Variable2</td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium align-top">Mayor o igual que</td>
                    <td className="px-6 py-4 text-justify"> <span>&gt;</span>= </td>
                    <td className="px-6 py-4 font-medium align-top"> Variable1 <span>&gt;</span>= Variable2</td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium align-top">Igual que</td>
                    <td className="px-6 py-4 text-justify"> == </td>
                    <td className="px-6 py-4 font-medium align-top"> Variable1 == Variable2</td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium align-top">Menor que</td>
                    <td className="px-6 py-4 text-justify"> <span>&lt;</span> </td>
                    <td className="px-6 py-4 font-medium align-top"> Variable1 <span>&lt;</span> Variable2</td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium align-top">Menor o igual que</td>
                    <td className="px-6 py-4 text-justify"> <span>&lt;</span>= </td>
                    <td className="px-6 py-4 font-medium align-top"> Variable1 <span>&lt;</span>= Variable2</td>
                </tr>
            </tbody>
        </table>
        <p className="text-gray-700 text-justify mb-8 leading-relaxed">
            Las comparaciones tienen dos posibles resultados: <br />
            <strong>Verdadero (True):</strong> se cumple la condición. <br />
            <strong>Falso (False):</strong> no se cumple la condición.<br />
            Una estructura condicional permite tomar decisiones en el código según si una condición se cumple o no. <br />
            Por ejemplo, si evaluamos 8 ≥ 7, la condición es verdadera. En programación, utilizamos la sentencia "if()" para esto, como se muestra a continuación:
        </p>
        <SyntaxHighlighter language="cpp" style={oneDark}>
            {codigo1}
        </SyntaxHighlighter>
        <p className="text-gray-700 text-justify mb-8 leading-relaxed">
            Si la condición es verdadera, necesitamos especificar qué código debe ejecutarse. Para ello, abrimos llaves {} después del paréntesis, formando un bloque de código.
        </p>
        <SyntaxHighlighter language="cpp" style={oneDark}>
            {codigo2}
        </SyntaxHighlighter>
        <p className="text-gray-700 text-justify mb-8 leading-relaxed">
            El programa mostrará el mensaje "Alumno aprobado" en la consola cuando la condición sea verdadera.
        </p>
        <SyntaxHighlighter language="cpp" style={oneDark}>
            {codigo3}
        </SyntaxHighlighter>
        <p className="text-gray-700 text-justify mb-8 leading-relaxed">
            En este caso la condición se cumple, por lo que entra al primer bloque. Si queremos ejecutar código cuando la condición NO se cumple, utilizamos la sentencia <strong>else</strong>, que significa "si no":
        </p>
        <SyntaxHighlighter language="cpp" style={oneDark}>
            {codigo4}
        </SyntaxHighlighter>
        <p className="text-gray-700 text-justify mb-8 leading-relaxed">
            En este caso, como 8 es mayor o igual a 7, se muestra "Alumno aprobado". <br />
            Ahora veamos un caso donde la condición NO se cumple:
        </p>
        <SyntaxHighlighter language="cpp" style={oneDark}>
            {codigo5}
        </SyntaxHighlighter>
        <p className="text-gray-700 text-justify mb-8 leading-relaxed">
            En este caso, como 6 es menor que 7, se ejecuta el bloque <strong>else</strong> y se muestra \"Alumno reprobado\". <br />
            La estructura general de un condicional if-else es la siguiente:
        </p>
        <SyntaxHighlighter language="cpp" style={oneDark}>
            {codigo6}
        </SyntaxHighlighter>
        </>
    )
}

export default Arduino001P04Component;