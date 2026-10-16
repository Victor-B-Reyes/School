function Debian001P01Component() {
  return (
    <>
      <h1 id="inicio" className="titulo-principal">VirtualBox</h1>
      <p className="parrafo">
        VirtualBox es un software que permite virtualizar sistemas operativos en tu ordenador. Con ello, puedes probar diferentes entornos o sistemas operativos sin afectar a tu máquina principal.
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap_VirtualBox.png" alt="Logotipo de VirtualBox" />
      </div>
      <p> 
        Enlace: 
        <a 
          href="https://www.virtualbox.org/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 underline hover:text-blue-700">
            Pagina oficial de VirtualBox
        </a>
      </p>
      <br />
      <p className="parrafo">
        Una ves lo tengamos descargado, procedemos a instalarlo. La instalación es bastante sencilla, 
        solo debemos seguir los pasos del asistente de instalación.
      </p>
      <p className="parrafo">
        Al abrirlo, nos debió aparecer algo así.
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap001.png" alt="Captura de pantalla de VirtualBox" />
      </div>
      <br />
      <p className="parrafo">
        Luego al pulsar en "Nueva" nos aparecerá un asistente para crear una nueva máquina virtual. En este caso, vamos a crear una máquina virtual para instalar Debian.
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap002.png" alt="Captura de pantalla de VirtualBox" />
      </div>
      <br />
      <p className="parrafo">
        Podemos nombre la maquina virtual como queramos, para este ejemplo la llamaremos "Server".
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap003.png" alt="Captura de pantalla de VirtualBox" />
      </div>
      <br />
      <p className="parrafo">
        En el siguiente paso, debemos seleccionar la img ISO del sistema operativo que queremos instalar. Para esto seleccionamos la opción de "Otro..."
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap004.png" alt="Captura de pantalla de VirtualBox" />
      </div>
      <br />
      <p className="parrafo">
        Se nos abrira archivos de nuestro ordenador, y debemos seleccionar la img ISO que descargamos previamente.
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap005.png" alt="Captura de pantalla de VirtualBox" />
      </div>
      <br />
      <p className="parrafo">
        Una vez seleccionada, el asistentente nos reconocera el sitema operativo y cual es la versión que vamos a instalar (Debian 13).
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap006.png" alt="Captura de pantalla de VirtualBox" />
      </div>
      <br />
      <p className="parrafo">
        Después desactivamos la opción de "Proceed with unattended installation" que seria arrancar la instalacion de manera automática.
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap007.png" alt="Captura de pantalla de VirtualBox" />
      </div>
      <br />
      <p className="parrafo">
        En las otras pestañas nos aparecera las opciones de configuración de la máquina virtual, como la memoria RAM.
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap008.png" alt="Captura de pantalla de VirtualBox" />
      </div>
      <br />
      <p className="parrafo">
        Tambien el espacio de almacenamiento que le vamos a asignar a la máquina virtual, en este caso 20GB, y precionamos en terminar para crear la máquina virtual.
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap009.png" alt="Captura de pantalla de VirtualBox" />
      </div>
      <br />
      <p className="parrafo">
        Nos debera de aparecer la máquina virtual que acabamos de crear, y para iniciar la instalación del sistema operativo, debemos precionar en "Iniciar".
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap0010.png" alt="Captura de pantalla de VirtualBox" />
      </div>
    </>
  );
}

export default Debian001P01Component;
