import Footer from "../../layout/fooder";
import Header from "../../layout/header";
import { cursosData } from "../../api/cursos";
function AnunciosComponent() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-100 px-4 py-12 sm:px-6">
        <section className="mx-auto max-w-4xl">
          <header className="mb-8 text-center bg-white p-6 rounded-lg shadow-md">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Anuncios
            </p>            
          </header>
          <select>
            <option value="" disabled>Seleccionar</option>
            <option value="">ono</option>
          </select>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default AnunciosComponent;
