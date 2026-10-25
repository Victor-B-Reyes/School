function Debian001P05Component() {
  return (
    <>
      <p className="parrafo">
        En esta pantalla seleccionaremos el método de particionado del disco según nuestras necesidades.
        <ul className="list-disc pl-5">
          <li><strong>Guiado - utilizar todo el disco:</strong> crea automáticamente las particiones. Ideal para instalaciones nuevas.</li>
          <li><strong>Guiado - utilizar el disco completo y configurar LVM:</strong> permite administrar y modificar los volúmenes de almacenamiento con mayor flexibilidad.</li>
          <li><strong>Guiado - utilizar todo el disco y configurar LVM cifrado:</strong> añade cifrado para proteger la información almacenada.</li>
          <li><strong>Manual:</strong> permite crear y configurar las particiones de forma personalizada.</li>
        </ul><br />
        Para una instalación básica de Debian en una máquina virtual, se recomienda la primera opción.
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap0026.png" alt="Captura de pantalla de VirtualBox" />
      </div>
      <br />
      <p className="parrafo">
        Seleccionamos el disco de almacenamiento.
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap0027.png" alt="Captura de pantalla de VirtualBox" />
      </div>
      <br />
      <p className="parrafo">
        En esta pantalla seleccionaremos el esquema de particionado del disco según nuestras necesidades:
        <ul className="list-disc pl-5">
          <li><strong>Todos los ficheros en una partición:</strong> mantiene el sistema en una sola partición. Es la opción más sencilla y recomendada para principiantes.</li>
          <li><strong>Separar la partición /home:</strong> guarda los archivos personales en una partición independiente del sistema.</li>
          <li><strong>Separar /home, /var y /tmp:</strong> distribuye los archivos personales, datos variables y archivos temporales en particiones separadas.</li>
          <li><strong>Separar /var y /srv, swap menor de 1 GB:</strong> orientada a servidores que almacenan datos y ofrecen servicios.</li>
          <li><strong>Esquema para discos pequeños (menos de 10 GB):</strong> optimiza el espacio disponible en discos con poca capacidad.</li>
        </ul><br />
        Para una instalación básica de Debian en una máquina virtual, se recomienda la primera opción.
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap0028.png" alt="Captura de pantalla de VirtualBox" />
      </div>
      <br />
      <p className="parrafo">
        Después, hacemos clic en "Finalizar".
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap0029.png" alt="Captura de pantalla de VirtualBox" />
      </div>
      <br />
      <p className="parrafo">
        Seleccionamos "Sí".
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap0030.png" alt="Captura de pantalla de VirtualBox" />
      </div>
      <br />
      <p className="parrafo">
        Esperamos a que comience a cargarse el sistema.
      </p>
      <div className="contenedor-imgen">
        <img src="/Debian_img/debianp1/Cap0031.png" alt="Captura de pantalla de VirtualBox" />
      </div>
      <br />
    </>
  );
}

export default Debian001P05Component;
