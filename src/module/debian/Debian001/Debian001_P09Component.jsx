function Debian001P03Component() {
  return (
    <>
      <h1 id="inicio" className="titulo-principal">Conexion por SSH</h1>
      <p className="parrafo">
        Para poder acceder a la máquina virtual desde otra computadora, es necesario configurar la red. Para ello, apagamos la máquina virtual, seleccionamos la máquina virtual y hacemos clic en "Configuración".
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap0051.jpg" alt="Captura de pantalla de VirtualBox" />
      </div>
      <br />
      <p className="parrafo">
        Al aperturar la ventana de configuración veremios varias opciones, seleccionamos la opción "Red".
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap0053.jpg" alt="Captura de pantalla de VirtualBox" />
      </div>
      <br />
      <p className="parrafo">
        En la opción "Conectado a" seleccionamos "Adaptador puente", y en la opción "Nombre" seleccionamos el adaptador de red que estemos utilizando, en este caso es "Wi-Fi".
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap0054.jpg" alt="Captura de pantalla de VirtualBox" />
      </div>
      <br />
      <p className="parrafo">
        Esto permitirá que la máquina virtual se conecte a la red de la computadora anfitriona y pueda obtener una dirección IP válida.
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap0055.jpg" alt="Captura de pantalla de VirtualBox" />
      </div>
      <br />
      <p className="parrafo">
        Al aceptar los cambios y encender la máquina virtual, podremos ver que se ha asignado una dirección IP válida, lo que nos permitirá acceder a la máquina virtual desde otra computadora en la misma red. Con el comando:
        <br /> <strong><code>ip a</code></strong><br/>
        Este comando nos mostrará la información de red de la máquina virtual, incluyendo la dirección IP asignada. Para este ejemplo es ka dirección IP: 192.168.10.81
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap0056.png" alt="Captura de pantalla de VirtualBox" />
      </div>
      <br />
      <p className="parrafo">
        Para conectarnos a la máquina virtual desde la computadora anfitriona, ingresamos a la terminal de windows y utilizamos el comando <strong><code>ssh</code></strong> seguido del nombre de usuario y la dirección IP de la máquina virtual. Por ejemplo:,
        <br /> <strong><code>ssh server@192.168.10.81</code></strong>
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap0057.jpg" alt="Captura de pantalla de VirtualBox" />
      </div>
      <br />
      <p className="parrafo">
        Al acceder nos dira preguntando si deseamos continuar con la conexión, a lo que respondemos "yes".
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap0058.png" alt="Captura de pantalla de VirtualBox" />
      </div>
      <br />
      <p className="parrafo">
        Y nos pedirá la contraseña del usuario (La contraseña no se reflejara mientras se escribe). al precionar enter, nos conectaremos a la máquina virtual desde la computadora anfitriona.
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap0059.png" alt="Captura de pantalla de VirtualBox" />
      </div>
      <br />
    </>
  );
}

export default Debian001P03Component;
