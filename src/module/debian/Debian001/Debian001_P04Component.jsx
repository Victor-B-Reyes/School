function Debian001P04Component() {
  return (
    <>
      <p className="parrafo">
        Ahora nos solicita la contraseña del usuario root, que servirá para realizar modificaciones e instalaciones
        en el sistema operativo. No olvides esta contraseña.
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap0020.png" alt="Captura de pantalla de VirtualBox" />
      </div>
      <br />
      <p className="parrafo">
        Añadiremos un nombre para el usuario root.
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap0022.png" alt="Captura de pantalla de VirtualBox" />
      </div>
      <br />
      <p className="parrafo">
        Ahora crearemos el usuario habitual.
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap0023.png" alt="Captura de pantalla de VirtualBox" />
      </div>
      <br />
      <p className="parrafo">
        Le asignaremos una contraseña. La contraseña del usuario no debe ser la misma que la de root.
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap0024.png" alt="Captura de pantalla de VirtualBox" />
      </div>
      <br />
      <p className="parrafo">
        Después, seleccionamos la zona horaria central para configurar el reloj.
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap0025.png" alt="Captura de pantalla de VirtualBox" />
      </div>
      <br />
    </>
  );
}

export default Debian001P04Component;
