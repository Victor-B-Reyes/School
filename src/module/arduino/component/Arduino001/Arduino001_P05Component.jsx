import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function Arduino001P05Component() {
const codigo1 = 
`void setup() {
  Serial.begin(9600);
}

void loop() {
    int num = 5;
    if(num == 5 ){
    int local = num;
    Serial.println(local);
    }
    Serial.println(local); // Error: 'local' no está definida en este ámbito
    delay(5000);
}`;

const codigo2 = 
`int global;
void setup() {
  Serial.begin(9600);
}

void loop() {
    int num = 5;
    if(num == 5 ){
    int global = num;
    Serial.println(global);
    }
    Serial.println(global);
    delay(5000);
}`;

const codigo3 = 
`int num;
void setup() {
  Serial.begin(9600);
}

void loop() {
    num++;
    Serial.println(num);
    delay(5000);
}`;

    return (
        <>
        <h1 id="inicio" className="titulo-principal">Práctica 5: Ámbito de variables y operadores</h1>
        <p className="parrafo">
            Los operadores de incremento y decremento permiten aumentar o disminuir el valor de una variable en una unidad.
        </p>
        <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3">Nombre</th>
                    <th scope="col" className="px-6 py-3">Símbolo</th>
                    <th scope="col" className="px-6 py-3">Uso</th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium align-top">Incremento</td>
                    <td className="px-6 py-4 text-justify"> ++ </td>
                    <td className="px-6 py-4 font-medium align-top"> Variable++</td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium align-top">Decremento</td>
                    <td className="px-6 py-4 text-justify"> -- </td>
                    <td className="px-6 py-4 font-medium align-top"> Variable--</td>
                </tr>
                
            </tbody>
        </table>
        <br />
        <p className="parrafo">
            Además, es fundamental entender la diferencia entre variables globales y variables locales. <br />

            <strong>Variables locales:</strong> Son aquellas cuya visibilidad se limita 
            al bloque actual (delimitado por llaves <code>{`{}`}</code>). Por ejemplo, si definimos una variable dentro de un 
            <code>if</code>, esa variable solo será visible en su interior. <br />

            Ejemplo de variable local:
        </p>
        <SyntaxHighlighter language="cpp" style={oneDark}>
            {codigo1}
        </SyntaxHighlighter>
        <p className="parrafo">
            Dentro de la condicional creamos una variable llamada <code>local</code>. Le asignamos 
            el valor de <code>num</code> y la imprimimos. Esa variable solo existe dentro del bloque del <code>if</code>. 
            Si intentamos imprimirla fuera (línea 13), obtendremos un error porque la variable deja de existir al cerrar la llave del <code>if</code>. <br />
            
            <strong>Variables globales:</strong> Son aquellas declaradas fuera de cualquier función. Estas variables son visibles y accesibles desde cualquier parte del código. <br />

            A continuación, veremos un ejemplo donde interactúan una variable global y una local con el mismo nombre:
        </p>
        <SyntaxHighlighter language="cpp" style={oneDark}>
            {codigo2}
        </SyntaxHighlighter>
        <p className="parrafo">
            En este caso, declaramos <code>int global;</code> al inicio, por lo que es una variable global (inicializada en 0). <br />
            Dentro del <code>if</code>, declaramos <code>int global = num;</code>. Esta es una <strong>nueva</strong> variable local que "oculta" a la global dentro de ese bloque. <br />
            Al imprimir <code>global</code> dentro del <code>if</code>, vemos el valor 5 (variable local). <br />
            Al imprimir <code>global</code> fuera del <code>if</code>, vemos el valor 0 (variable global), ya que la modificación anterior solo afectó a la variable local. <br />

            Para esta práctica utilizaremos una variable global llamada <code>num</code> para probar el operador de incremento:
        </p>
        <SyntaxHighlighter language="cpp" style={oneDark}>
            {codigo3}
        </SyntaxHighlighter>
        </>
    )
}

export default Arduino001P05Component;