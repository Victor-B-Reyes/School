import { useState } from "react";
import { sendTelegramMessage } from "../api/telegram";

const FormularioInteres = ({ curso }) => {
    const [form, setForm] = useState({ nombre: "", contacto: "", escolaridad: "", institucion: "" });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => setForm((previous) => ({ ...previous, [event.target.name]: event.target.value }));

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!form.nombre || !form.contacto || !form.escolaridad || !form.institucion) {
            setError("Completa todos los campos");
            return;
        }

        setLoading(true);
        setError("");
        try {
            await sendTelegramMessage(`
<b>🚀 Nueva Solicitud para curso</b>
<b>👤 Nombre:</b> ${form.nombre}
<b>🏫 Institucion:</b> ${form.institucion}
<b>🎓 Escolaridad:</b> ${form.escolaridad}
<b>📚 Curso:</b> ${curso}
<b>📞 Contacto:</b> <code>${form.contacto}</code>`.trim());
            setSuccess("Solicitud enviada");
            setForm({ nombre: "", contacto: "", escolaridad: "", institucion: "" });
            window.open("https://chat.whatsapp.com/CPZ3GPLKnrcKy6FkzalN30?s=cl&p=a&mlu=4&ilr=4", "_blank", "noopener,noreferrer");
        } catch (submitError) {
            console.error(submitError);
            setError("Ocurrio un error al enviar la solicitud.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="relative z-10 p-2">
            <form onSubmit={handleSubmit} className="relative mt-6 space-y-4">
                {loading && <div className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-2xl bg-gray-900/80 backdrop-blur-sm"><div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-400 border-t-transparent" /><p className="mt-3 text-sm font-medium text-white">Enviando solicitud...</p></div>}
                {error && <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
                {success && <p className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">{success}</p>}
                <div><label className="block text-sm font-medium text-gray-200"></label><img src="/CursoIot.png" alt="Curso IoT" className="w-full rounded-lg" /></div>
                <div><label htmlFor="nombre" className="mb-2 block text-sm font-medium text-gray-200">Nombre</label><input id="nombre" name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre completo" className="w-full rounded-lg border border-gray-600 bg-white px-4 py-3 text-gray-800 outline-none transition focus:border-blue-500" /></div>
                <div><label htmlFor="contacto" className="mb-2 block text-sm font-medium text-gray-200">Contacto</label><input id="contacto" name="contacto" value={form.contacto} onChange={handleChange} placeholder="Telefono o correo" className="w-full rounded-lg border border-gray-600 bg-white px-4 py-3 text-gray-800 outline-none transition focus:border-blue-500" /></div>
                <div><label htmlFor="escolaridad" className="mb-2 block text-sm font-medium text-gray-200">Escolaridad</label><select id="escolaridad" name="escolaridad" value={form.escolaridad} onChange={handleChange} className="w-full rounded-lg border border-gray-600 bg-white px-4 py-3 text-gray-800 outline-none transition focus:border-blue-500"><option value="">Selecciona una opcion</option><option value="secundaria">Secundaria</option><option value="preparatoria">Preparatoria</option><option value="universidad">Universidad</option><option value="otro">Otro</option></select></div>
                <div><label htmlFor="institucion" className="mb-2 block text-sm font-medium text-gray-200">Institucion</label><input id="institucion" name="institucion" value={form.institucion} onChange={handleChange} placeholder="Nombre de tu institucion" className="w-full rounded-lg border border-gray-600 bg-white px-4 py-3 text-gray-800 outline-none transition focus:border-blue-500" /></div>
                <button type="submit" disabled={loading} className={`w-full rounded-lg px-5 py-3 font-semibold text-white transition ${loading ? "cursor-not-allowed bg-gray-500" : "bg-blue-600 hover:bg-blue-700"}`}>{loading ? "Procesando..." : "Enviar"}</button>
            </form>
        </section>
    );
};

export default FormularioInteres;
