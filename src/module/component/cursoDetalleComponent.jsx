import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { cursosData } from "../api/cursos";
import Header from "../layout/header";
import Footer from "../layout/fooder";

const getEmbedPdfUrl = (url) => {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? `https://drive.google.com/file/d/${match[1]}/preview` : url;
};

const CursoDetalleComponent = () => {
  const { identifier } = useParams();
  const navigate = useNavigate();
  const curso = cursosData.find((item) => item.identifier === identifier);
  const [form, setForm] = useState({
    nombre: "",
    contacto: ""
  });

  const pdfUrl = useMemo(() => {
    if (!curso?.pdf) {
      return "";
    }

    return getEmbedPdfUrl(curso.pdf);
  }, [curso]);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (!curso) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Header />
        <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Curso no encontrado</h1>
          <p className="mt-3 text-gray-600">
            No encontramos informaciÃ³n para este curso.
          </p>
          <button
            type="button"
            onClick={() => navigate("/Cursos")}
            className="mt-6 rounded-lg bg-gray-900 px-5 py-3 font-semibold text-white transition hover:bg-gray-700"
          >
            Volver a cursos
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-8 rounded-2xl bg-white p-6 shadow-sm">
          <button
            type="button"
            onClick={() => navigate("/Cursos")}
            className="mb-4 text-sm font-semibold text-gray-500 transition hover:text-gray-800"
          >
            ← Volver a cursos
          </button>
          <h1 className="text-3xl font-bold text-gray-900">{curso.title}</h1>
          <p className="mt-3 max-w-4xl text-gray-600">{curso.description}</p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-700">
            <span className="rounded-full bg-blue-100 px-3 py-1 font-medium text-blue-700">
              Nivel: {curso.nivel}
            </span>
            <span className="rounded-full bg-gray-100 px-3 py-1 font-medium text-gray-700">
              DuraciÃ³n: {curso.horas} horas
            </span>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <section className="rounded-2xl bg-white p-4 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Vista previa del PDF</h2>
              <a
                href={curso.pdf}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-blue-700 hover:text-blue-900"
              >
                Abrir PDF
              </a>
            </div>
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <iframe
                title={`PDF de ${curso.title}`}
                src={pdfUrl}
                className="h-[70vh] w-full"
                allow="autoplay"
              />
            </div>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">Formulario de interÃ©s</h2>
            <p className="mt-2 text-sm text-gray-600">
              DejÃ© una base temporal para el formulario. Cuando me pases los campos finales, lo adapto enseguida.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="curso" className="mb-2 block text-sm font-medium text-gray-700">
                  Curso
                </label>
                <input
                  id="curso"
                  type="text"
                  value={curso.title}
                  disabled
                  className="w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-3 text-gray-500"
                />
              </div>

              <div>
                <label htmlFor="nombre" className="mb-2 block text-sm font-medium text-gray-700">
                  Nombre
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Nombre completo"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 outline-none transition focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="contacto" className="mb-2 block text-sm font-medium text-gray-700">
                  Contacto
                </label>
                <input
                  id="contacto"
                  name="contacto"
                  type="text"
                  value={form.contacto}
                  onChange={handleChange}
                  placeholder="Correo o telÃ©fono"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 outline-none transition focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-gray-900 px-5 py-3 font-semibold text-white transition hover:bg-gray-700"
              >
                Enviar
              </button>
            </form>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CursoDetalleComponent;
