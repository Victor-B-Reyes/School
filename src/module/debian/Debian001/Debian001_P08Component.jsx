function Debian001P08Component() {
  return (
    <>
      <h1 id="inicio" className="titulo-principal">Inicialización del sistema</h1>
      <p className="parrafo">
        Una vez finalizada la instalación, podemos continuar con el reinicio del sistema.
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap0042.png" alt="Captura de pantalla de VirtualBox" />
      </div>
      <br />
      <p className="parrafo">
        Cuando aparezca la opción para iniciar Debian, presionamos Enter.
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap0043.png" alt="Captura de pantalla de VirtualBox" />
      </div>
      <br />
      <p className="parrafo">
        Ingresamos el nombre de usuario y la contraseña que configuramos durante la instalación. (En este caso de la contraseña no se reflejara mientras se escribe).
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap0044.png" alt="Captura de pantalla de VirtualBox" />
      </div>
      <br />
      <p className="parrafo">
        ¡Felicidades! Acabas de acceder a tu servidor.
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap0045.png" alt="Captura de pantalla de VirtualBox" />
      </div>
      <br />
      <p className="parrafo">
        Para poder realizar cualquier actualizacion o instalacion de paquetes, es necesario tener privilegios de administrador, para ello debemos ejecutar el comando: <br /> <strong><code>su</code></strong> <br/> y escribir la contraseña del usuario root.
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap0046.png" alt="Captura de pantalla de VirtualBox" />
      </div>
      <br />
      <p className="parrafo">
        Para limpiar la pantalla utilizamos el comando:
         <br /> <strong><code>clear</code></strong> <br/>
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap0047.png" alt="Captura de pantalla de VirtualBox" />
      </div>
      <br />
      <p className="parrafo">
        nos debera de aparecer la pantalla limpia
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap0048.png" alt="Captura de pantalla de VirtualBox" />
      </div>
      <br />
      <p className="parrafo">
        Para actualizar la lista de paquetes utilizamos el comando:
         <br /> <strong><code>apt update</code></strong> <br/>
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap0049.png" alt="Captura de pantalla de VirtualBox" />
      </div>
      <br />
      <p className="parrafo">
        Y para actualizar los paquetes utilizamos el comando:
         <br /> <strong><code>apt upgrade</code></strong> <br/>
         si nos aparece un mensaje de confirmacion, presionamos la tecla <strong><code>S</code></strong> y luego <strong><code>Enter</code></strong>
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap0050.png" alt="Captura de pantalla de VirtualBox" />
      </div>
      <br />

      
    </>
  );
}

export default Debian001P08Component;
