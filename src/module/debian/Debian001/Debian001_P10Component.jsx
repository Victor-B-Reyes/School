import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function Debian001P10Component() {
  return (
    <>
      <h1 id="inicio" className="titulo-principal">Instalación de Nginx</h1>
      
      <p className="parrafo">
        Para instalar Nginx, necesitamos permisos de superusuario. Primero instalamos las herramientas necesarias para descargar archivos, verificar firmas y reconocer la versión de Debian.
        <SyntaxHighlighter language="shell" style={oneDark}>
          {`apt install curl gnupg2 ca-certificates lsb-release debian-archive-keyring`}
        </SyntaxHighlighter>
      </p>
      <p className="parrafo">
       Aparecerán los paquetes que se instalarán y el espacio que ocuparán. Para continuar, presionamos "y" y después "Enter".
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap0061.png" alt="Captura de pantalla de VirtualBox" />
      </div>
      <br />
      <p className="parrafo">
        Descargamos la clave pública de Nginx y la guardamos temporalmente en el equipo.
        <SyntaxHighlighter language="shell" style={oneDark}>
          {`curl -v https://nginx.org/keys/nginx_signing.key -o /tmp/nginx_signing.key`}
        </SyntaxHighlighter>
      </p>
      
      <p className="parrafo">
        Guardamos la clave oficial de Nginx para que APT pueda comprobar la autenticidad de los paquetes.
        <SyntaxHighlighter language="shell" style={oneDark}>
          {`curl https://nginx.org/keys/nginx_signing.key | gpg --dearmor | tee /usr/share/keyrings/nginx-archive-keyring.gpg >/dev/null`}
        </SyntaxHighlighter>
      </p>
      
      <p className="parrafo">
        Creamos el directorio donde GPG guardará la configuración del usuario root.
        <SyntaxHighlighter language="shell" style={oneDark}>
          {`mkdir -p /root/.gnupg`}
        </SyntaxHighlighter>
      </p>
      
      <p className="parrafo">
        Limitamos el acceso a este directorio para que solo el usuario root pueda utilizarlo.
        <SyntaxHighlighter language="shell" style={oneDark}>
          {`chmod 700 /root/.gnupg`}
        </SyntaxHighlighter>
      </p>
      
      <p className="parrafo">
        Comprobamos que el archivo de llaves contiene la clave de Nginx.
        <SyntaxHighlighter language="shell" style={oneDark}>
          {`gpg --dry-run --quiet --no-keyring --import --import-options import-show /usr/share/keyrings/nginx-archive-keyring.gpg`}
        </SyntaxHighlighter>
      </p>
      
      <p className="parrafo">
        Agregamos el repositorio oficial de Nginx para que APT pueda encontrar sus paquetes.
        <SyntaxHighlighter language="shell" style={oneDark}>
          {`echo "deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] https://nginx.org/packages/debian \`lsb_release -cs\` nginx" | tee /etc/apt/sources.list.d/nginx.list`}
        </SyntaxHighlighter>
      </p>
      
      <p className="parrafo">
        Damos prioridad a los paquetes de Nginx descargados desde su repositorio oficial.
        <SyntaxHighlighter language="shell" style={oneDark}>
          {`echo -e "Package: *\\nPin: origin nginx.org\\nPin: release o=nginx\\nPin-Priority: 900\\n" | tee /etc/apt/preferences.d/99nginx`}
        </SyntaxHighlighter>
      </p>
      
      <p className="parrafo">
        Actualizamos la lista de paquetes disponibles en los repositorios.
        <SyntaxHighlighter language="shell" style={oneDark}>
          {`apt update`}
        </SyntaxHighlighter>
      </p>
      
      <p className="parrafo">
        Instalamos el servidor web Nginx y los paquetes que necesita para funcionar.
        <SyntaxHighlighter language="shell" style={oneDark}>
          {`apt install nginx`}
        </SyntaxHighlighter>
      </p>
      
      <p className="parrafo">
        Revisamos si el servidor Apache2 está activo y puede ocupar el mismo puerto que Nginx.
        <SyntaxHighlighter language="shell" style={oneDark}>
          {`systemctl status apache2`}
        </SyntaxHighlighter>
      </p>
      
      <p className="parrafo">
        Si Apache2 está activo, lo detendremos para evitar conflictos con Nginx. Para salir de esta pantalla, presionamos "Ctrl + C".
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap0073.png" alt="Captura de pantalla de VirtualBox" />
      </div>
      <br />
      <p className="parrafo">
        Detenemos el servidor Apache2 para liberar el puerto que está utilizando.
        <SyntaxHighlighter language="shell" style={oneDark}>
          {`systemctl stop apache2`}
        </SyntaxHighlighter>
      </p>
      <p className="parrafo">
        Desinstalamos Apache2 del equipo.
        <SyntaxHighlighter language="shell" style={oneDark}>
          {`apt remove apache2`}
        </SyntaxHighlighter>
      </p>
      <p className="parrafo">
       Revisamos el estado de Nginx para confirmar que se instaló correctamente.
        <SyntaxHighlighter language="shell" style={oneDark}>
          {`systemctl status nginx`}
        </SyntaxHighlighter>
        Si todo está correcto, Nginx aparecerá activo. Para salir, presionamos "Ctrl + C". Si aparece algun error, podemos intentar reiniciar el servicio con el comando:
        <SyntaxHighlighter language="shell" style={oneDark}>
          {`systemctl restart nginx`}
        </SyntaxHighlighter>
        y luego volver a verificar su estado. De ser necesario reiniciamo la máquina virtual para que los cambios surtan efecto.
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap0078.png" alt="Captura de pantalla de VirtualBox" />
      </div>
      
    </>
  );
}

export default Debian001P10Component;
