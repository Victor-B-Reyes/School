function IA001P01Component() {
  return (
    <>
      <h1 id="inicio" className="titulo-principal">Clase 1: Introducción a la programación con IA</h1>
      <p className="parrafo">
        <strong>Objetivo:</strong> Entender cómo funciona la IA y su rol en el desarrollo de software.
      </p>
      <p className="parrafo">
        En esta sesión exploraremos:
        <ul className="list-disc ml-10 mt-2">
          <li>¿Qué es la IA y cómo está redefiniendo la tecnología?</li>
          <li>El funcionamiento interno de herramientas como ChatGPT.</li>
          <li>Gemini: La apuesta de Google para la productividad.</li>
          <li>Demostración práctica de generación de código mediante lenguaje natural.</li>
        </ul>
      </p>
      <div className="flex justify-center my-10">
        <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/dmtHLo3dX3M?si=yrkqw8a9IngaGe5U"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default IA001P01Component;
