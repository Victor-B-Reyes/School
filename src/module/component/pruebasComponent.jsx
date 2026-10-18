function PruebasComponent() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-12 sm:px-6">
      <section className="mx-auto max-w-4xl">
        <header className="mb-8 text-center bg-white p-6 rounded-lg shadow-md">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Área de pruebas
          </p>
          <h1 className="text-3xl font-bold text-slate-800 sm:text-4xl">
            Reproductor de video
          </h1>
          <p className="mt-3 text-slate-600">
            Prueba de visualización de contenido multimedia.
          </p>
        </header>

        <div className="overflow-hidden rounded-2xl bg-slate-950 shadow-xl ring-1 ring-slate-900/10">
          <iframe
            className="aspect-video w-full"
            src="https://mega.nz/embed/v8ZRFIbC#Ly4H39TPF1fQG-5OxxPT90g8GsUFNOFvZD951ogUN3A"
            title="Video de Mega"
            allowFullScreen
          />
        </div>

        <p className="mt-4 text-center text-sm text-slate-500">
          Página de pruebas
        </p>
      </section>
    </main>
  );
}

export default PruebasComponent;
