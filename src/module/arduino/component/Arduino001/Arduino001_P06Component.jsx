import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function Arduino001P06Component() {
const codigo1 = 
`int mifuncion(int num){
    int resultado;
    resultado = num * num;
    return resultado;
}`;

const codigo2 = 
`void setup() {
  Serial.begin(9600);
}

void loop() {
    Serial.println(mifuncion(5));
    delay(5000);
}

int mifuncion(int num){
    int resultado;
    resultado = num * num;
    return resultado;
}`;

const codigo3 = 
`void setup() {
  Serial.begin(9600);
}

void loop() {
    Serial.println(mifuncion(5, 2));
    delay(5000);
}

int mifuncion(int num1, int num2){
    int resultado;
    resultado = num1 * num2;
    return resultado;
}`;

    return (
        <>
        <h1 id="inicio" className="titulo-principal">Práctica 6: Funciones</h1>
        <p className="parrafo">
            Las funciones, también llamadas métodos, nos permiten dividir el trabajo que hace un programa
            en tareas más pequeñas separadas de la parte principal. <br />

            La estructura de una función en Arduino es:
        </p>
        <div className="contenedor-imgen">
            <img src="/arduino_img/arduinop1/funcion.png" className="w-full md:w-1/2 h-auto"  alt="Estructura de una función" />
        </div>
        <p className="parrafo">
            Como podemos observar, el primer atributo que tenemos es el tipo de dato retornado, que también
            sería el tipo de dato que quiere ser regresado o con el cual trabaja la función; en este ejemplo 
            es <code>int</code>, que corresponde a entero. <br />

            El segundo es el nombre de la función. En la imagen de ejemplo es <code>miFuncionMultiplicar</code>, pero aquí se puede 
            nombrar de cualquier forma (en el código usaremos <code>mifuncion</code>). <br />

            Después, entre paréntesis, van los parámetros pasados a la función, que son los datos que va a 
            recibir la función y a qué tipo de dato corresponden. <br />

            Entre llaves, lo que se pretende realizar con la función. <br />

            Y siempre retornar el valor final o resultado. <br />

            Veámoslo en código:
        </p>
        <SyntaxHighlighter language="cpp" style={oneDark}>
            {codigo1}
        </SyntaxHighlighter>
        <p className="parrafo">
            Esta función se encarga de recibir un número, multiplicarlo por sí mismo y regresar ese valor. <br />
            Para llamarla y poder asignar un número, se hace de la siguiente forma:
        </p>
        <SyntaxHighlighter language="cpp" style={oneDark}>
            {'mifuncion(5);'}
        </SyntaxHighlighter>
        <p className="parrafo">
            Al llamarla, retornará el valor (25 en este caso), pero para mostrarlo por consola necesitamos:
        </p>
        <SyntaxHighlighter language="cpp" style={oneDark}>
            {'Serial.println(mifuncion(5));'}
        </SyntaxHighlighter>
        <p className="parrafo">
            Y todo el código queda de la siguiente manera:
        </p>
        <SyntaxHighlighter language="cpp" style={oneDark}>
            {codigo2}
        </SyntaxHighlighter>
        <p className="parrafo">
            Si quisiéramos multiplicar dos números, el código sería:
        </p>
        <SyntaxHighlighter language="cpp" style={oneDark}>
            {codigo3}
        </SyntaxHighlighter>
        <p className="parrafo">
            Cabe destacar que cuando pasamos los valores a la función, se le puede asignar el 
            nombre que uno desee a los parámetros. Esto se hace para crear una variable con el tipo de dato correspondiente 
            y poderlo usar dentro de la misma función, como vemos en los ejemplos.
        </p>
        
       
        </>
    )
}

export default Arduino001P06Component;