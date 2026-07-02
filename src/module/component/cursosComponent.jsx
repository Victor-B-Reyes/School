import { useMemo, useState } from "react";
import Header from "../layout/header";
import Footer from "../layout/fooder";
import { cursosData } from "../api/cursos";
import { saveRegisterSolicitud } from "../api/registerSolicitud";
import { sendTelegramMessage } from "../api/telegram";

const getEmbedPdfUrl = (url) => {
    const match = url.match(/\/d\/([^/]+)/);
    return match ? `https://drive.google.com/file/d/${match[1]}/preview` : url;
};

const CursosComponent = () => {
    const [cursoSeleccionado, setCursoSeleccionado] = useState(null);
    const [form, setForm] = useState({
        curso: "",
        nombre: "",
        escolaridad: "",
        institucion: "",
        contacto: ""
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    const pdfUrl = useMemo(() => {
        if (!cursoSeleccionado?.pdf) {
            return "";
        }

        return getEmbedPdfUrl(cursoSeleccionado.pdf);
    }, [cursoSeleccionado]);

    const abrirModal = (curso) => {
        setCursoSeleccionado(curso);
        setForm({
            curso: curso.identifier,
            nombre: "",
            escolaridad: "",
            institucion: "",
            contacto: ""
        });
        setError("");
        setSuccess("");
    };

    const cerrarModal = () => {
        setCursoSeleccionado(null);
        setError("");
        setSuccess("");
        setLoading(false);
    };

    const handleChange = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.curso || !form.nombre || !form.escolaridad || !form.contacto || !form.institucion) {
            setError("Completa todos los campos");
            setSuccess("");
            return;
        }

        setLoading(true);
        setError("");
        setSuccess("");

        const dataToSend = {
            id: 0,
            date: new Date().toISOString(),
            curso: form.curso,
            escolaridad: form.escolaridad,
            institucion: form.institucion,
            nombre: form.nombre,
            contacto: form.contacto,
            atendido: false,
            active: true
        };

        try {
            //await saveRegisterSolicitud(dataToSend);
            const mensajeTelegram = `
<b>🚀 Nueva Solicitud para curso</b>
<b>👤 Nombre:</b> ${form.nombre}
<b>🏫 Institución:</b> ${form.institucion}
<b>📚 Escolaridad:</b> ${form.escolaridad}
<b>💻 Curso:</b> ${form.curso}
<b>📞 Contacto:</b> <code>${form.contacto}</code>`.trim();

            await sendTelegramMessage(mensajeTelegram);

            setSuccess("Solicitud enviada");
            setForm({
                curso: cursoSeleccionado?.identifier || "",
                nombre: "",
                escolaridad: "",
                institucion: "",
                contacto: ""
            });
        } catch (submitError) {
            console.error(submitError);
            setError("Ocurrio un error al enviar la solicitud.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Header />
            <div className="min-h-screen bg-gray-50 text-gray-800">
                <main>
                    <h1 className="py-4 text-center text-4xl font-bold text-white" id="Cursos">
                        Si tu institucion necesita ayuda
                    </h1>
                    <div className="container mx-auto grid gap-6 px-4 py-8 md:grid-cols-2">
                        {cursosData.map((curso) => (
                            <div key={curso.id} className="flex flex-col rounded-lg bg-white p-6 shadow-md">
                                <h2 className="text-2xl font-bold text-gray-800">{curso.title}</h2>
                                <p className="mt-2 text-gray-600">{curso.description}</p>
                                <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-700">
                                    <span className="rounded-full bg-blue-100 px-3 py-1 font-medium text-blue-700">
                                        Nivel: {curso.nivel}
                                    </span>
                                    <span className="rounded-full bg-gray-100 px-3 py-1 font-medium text-gray-700">
                                        {curso.horas} horas
                                    </span>
                                </div>
                                <div className="mt-6">
                                    <button
                                        type="button"
                                        onClick={() => abrirModal(curso)}
                                        className="inline-flex rounded-lg bg-gray-900 px-5 py-3 font-semibold text-white transition hover:bg-gray-700"
                                    >
                                        Ver mas
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>

            {cursoSeleccionado && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
                    <div className="relative max-h-[90vh] w-full max-w-7xl overflow-hidden rounded-2xl bg-white shadow-2xl">
                        <button
                            type="button"
                            onClick={cerrarModal}
                            className="absolute right-4 top-4 z-10 rounded-full bg-gray-100 px-3 py-1 text-sm font-bold text-gray-700 transition hover:bg-gray-200"
                        >
                            X
                        </button>

                        <div className="grid max-h-[90vh] overflow-y-auto lg:grid-cols-2">
                            <section className="border-b border-gray-200 p-4 lg:border-b-0 lg:border-r">
                                <div className="mb-4 flex items-start justify-between gap-4">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            {cursoSeleccionado.title}
                                        </h2>
                                        <p className="mt-2 text-sm text-gray-600">
                                            {cursoSeleccionado.description}
                                        </p>
                                    </div>
                                    <a
                                        href={cursoSeleccionado.pdf}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="shrink-0 text-sm font-semibold text-blue-700 hover:text-blue-900"
                                    >
                                        Abrir PDF
                                    </a>
                                </div>

                                <div className="mb-4 flex flex-wrap gap-3 text-sm text-gray-700">
                                    <span className="rounded-full bg-blue-100 px-3 py-1 font-medium text-blue-700">
                                        Nivel: {cursoSeleccionado.nivel}
                                    </span>
                                    <span className="rounded-full bg-gray-100 px-3 py-1 font-medium text-gray-700">
                                        {cursoSeleccionado.horas} horas
                                    </span>
                                </div>

                                <div className="overflow-hidden rounded-xl border border-gray-200">
                                    <iframe
                                        title={`PDF de ${cursoSeleccionado.title}`}
                                        src={pdfUrl}
                                        className="h-[65vh] w-full"
                                        allow="autoplay"
                                    />
                                </div>
                            </section>

                            <section className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900">Formulario de interes</h3>
                                <p className="mt-2 text-sm text-gray-600">
                                    Completa tus datos para solicitar acceso al curso.
                                </p>

                                <form onSubmit={handleSubmit} className="relative mt-6 space-y-4">
                                    {loading && (
                                        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-2xl bg-white/80 backdrop-blur-sm">
                                            <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-400 border-t-transparent"></div>
                                            <p className="mt-3 text-sm font-medium text-gray-700">Enviando solicitud...</p>
                                        </div>
                                    )}

                                    {error && (
                                        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                                            {error}
                                        </p>
                                    )}

                                    {success && (
                                        <p className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
                                            {success}
                                        </p>
                                    )}

                                    <div>
                                        <label htmlFor="curso" className="mb-2 block text-sm font-medium text-gray-700">
                                            Curso
                                        </label>
                                        <input
                                            id="curso"
                                            type="text"
                                            value={cursoSeleccionado.title}
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
                                            placeholder="Telefono o correo"
                                            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 outline-none transition focus:border-blue-500"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="escolaridad" className="mb-2 block text-sm font-medium text-gray-700">
                                            Escolaridad
                                        </label>
                                        <select
                                            id="escolaridad"
                                            name="escolaridad"
                                            value={form.escolaridad}
                                            onChange={handleChange}
                                            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 outline-none transition focus:border-blue-500"
                                        >
                                            <option value="">Selecciona una opcion</option>
                                            <option value="secundaria">Secundaria</option>
                                            <option value="preparatoria">Preparatoria</option>
                                            <option value="universidad">Universidad</option>
                                            <option value="otro">Otro</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="institucion" className="mb-2 block text-sm font-medium text-gray-700">
                                            Institucion
                                        </label>
                                        <input
                                            id="institucion"
                                            name="institucion"
                                            type="text"
                                            value={form.institucion}
                                            onChange={handleChange}
                                            placeholder="Nombre de tu institucion"
                                            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 outline-none transition focus:border-blue-500"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className={`w-full rounded-lg px-5 py-3 font-semibold text-white transition ${
                                            loading ? "cursor-not-allowed bg-gray-500" : "bg-gray-900 hover:bg-gray-700"
                                        }`}
                                    >
                                        {loading ? "Procesando..." : "Enviar"}
                                    </button>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default CursosComponent;
