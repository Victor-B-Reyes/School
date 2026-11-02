import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function Debian001P11Component() {
  return (
    <>
      <h1 id="inicio" className="titulo-principal">Instalación de MariaDB</h1>
      <p className="parrafo">
        Instalamos el servidor MariaDB. La opción <code>-y</code> confirma automáticamente la instalación.
         <SyntaxHighlighter language="shell" style={oneDark}>
            {`apt install mariadb-server -y`}
          </SyntaxHighlighter>
      </p>
      <p className="parrafo">
        Revisamos si el servicio de MariaDB está activo.
         <SyntaxHighlighter language="shell" style={oneDark}>
            {`systemctl status mariadb`}
          </SyntaxHighlighter>
      </p>
      <p className="parrafo">
        Activamos MariaDB y hacemos que inicie junto con el sistema.
         <SyntaxHighlighter language="shell" style={oneDark}>
            {`systemctl enable --now mariadb`}
          </SyntaxHighlighter>
      </p>
      <p className="parrafo">
        Comprobamos que el paquete del servidor MariaDB esté instalado.
         <SyntaxHighlighter language="shell" style={oneDark}>
            {`dpkg -l | grep mariadb-server`}
          </SyntaxHighlighter>
      </p>
      <p className="parrafo">
        Buscamos la ubicación de la herramienta de configuración segura de MariaDB.
         <SyntaxHighlighter language="shell" style={oneDark}>
            {`command -v mariadb-secure-installation`}
          </SyntaxHighlighter>
      </p>
      <p className="parrafo">
        Iniciamos la configuración para proteger MariaDB.
         <SyntaxHighlighter language="shell" style={oneDark}>
            {`mariadb-secure-installation`}
          </SyntaxHighlighter>
      </p>
    </>
  );
}

export default Debian001P11Component;
