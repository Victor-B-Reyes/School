function Debian001P07Component() {
  return (
    <>
      <p className="parrafo">
        En la seleccion de programas nos apareceran varias opciones, en este caso seleccionaremos:
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap0038.png" alt="Captura de pantalla de VirtualBox" />
      </div>
      <br />
      <p className="parrafo">
        Para la practica solo seleccionaremos "Web server" y "SSH server", ya que no necesitamos un entorno de escritorio.
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap0039.png" alt="Captura de pantalla de VirtualBox" />
      </div>
      <br />
      <p className="parrafo">
        El arranque GRUB es un gestor de arranque que permite seleccionar el sistema operativo a iniciar. En esta pantalla seleccionaremos "Sí" para instalar GRUB en el disco duro.
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap0040.png" alt="Captura de pantalla de VirtualBox" />
      </div>
      <br />
      <p className="parrafo">
        y seleccionamos el disco duro donde se instalará GRUB.
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap0041.png" alt="Captura de pantalla de VirtualBox" />
      </div>
      <br />
    </>
  );
}

export default Debian001P07Component;
