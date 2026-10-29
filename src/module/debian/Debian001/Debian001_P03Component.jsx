function Debian001P03Component() {
  return (
    <>
      <h1 id="inicio" className="titulo-principal">Configuracion de red</h1>
      <p className="parrafo">
        En la configuración de red, al tratarse de una máquina virtual, se detecta la configuración por defecto.
        Si fuera una máquina física, tendríamos que conectarnos a internet o seleccionar un adaptador.
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap0017.png" alt="Captura de pantalla de VirtualBox" />
      </div>
      <br />
      <p className="parrafo">
        El nombre de la máquina será el que aparecerá cuando nos conectemos a la red.
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap0018.png" alt="Captura de pantalla de VirtualBox" />
      </div>
      <br />
      <p className="parrafo">
        Si ya cuenta con un dominio, puede añadirlo en la configuración principal.
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap0019.png" alt="Captura de pantalla de VirtualBox" />
      </div>
      <br />
    </>
  );
}

export default Debian001P03Component;
