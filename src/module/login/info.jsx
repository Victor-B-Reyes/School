import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cursos } from "../api/data";
import { saveRegisterSolicitud } from "../api/registerSolicitud";
import { sendTelegramMessage } from "../api/telegram";
import Header from "../layout/header";
import Footer from "../layout/fooder";
function Info() {
    const navigate = useNavigate();
  const [form, setForm] = useState({
    curso: "",
    nombre: "",
    escolaridad: "",
    institucion: "",
    contacto: ""
  });
  const retornar = () => {
    navigate("/");
  };

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
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
      await saveRegisterSolicitud(dataToSend);
      const nuewDato = `
<b>🚀 Nueva Solicitud de Acceso</b>
<b>👤 Nombre:</b> ${form.nombre}
<b>🏫 Institución:</b> ${form.institucion}
<b>📚 Escolaridad:</b> ${form.escolaridad}
<b>💻 Curso:</b> ${form.curso}
<b>📞 Contacto:</b> <code>${form.contacto}</code>`.trim();
      //console.log("Solicitud guardada en la base de datos", nuewDato);
      // Enviar mensaje a Telegram
      await sendTelegramMessage(nuewDato);

      setSuccess("Solicitud enviada 🚀");
      setForm({
        curso: "",
        nombre: "",
        escolaridad: "",
        institucion: "",
        contacto: ""
      });
    } catch (err) {
      console.error(err);
      setError("Ocurrió un error al enviar la solicitud.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
    <div className="h-[80vh] flex items-center justify-center relative bg-cover bg-center" style={{
          backgroundImage: "url('/server.jpg')"
        }}>
      
      <form
        onSubmit={handleSubmit}
        className="w-96 p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl"
      >
        {/* Spinner de carga overlay */}
        {loading && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/60 rounded-2xl backdrop-blur-sm">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-400 border-t-transparent"></div>
            <p className="text-white mt-4 font-medium">Enviando solicitud...</p>
          </div>
        )}

        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Solicitud de Acceso
        </h2>

        {error && (
          <p className="text-red-400 text-sm text-center mb-3">
            {error}
          </p>
        )}

        {success && (
          <p className="text-green-400 text-sm text-center mb-3">
            {success}
          </p>
        )}

        {/* Curso */}
        <select
          name="curso"
          value={form.curso}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded-xl bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="" className="text-black">
            Selecciona un curso
          </option>
              
          {cursos.map((curso) => (
            <option
              key={curso.id}
              value={curso.identifier}
              className="text-black"
            >
              {curso.title}
            </option>
          ))}
        </select>

        {/* Nombre */}
        <input
          type="text"
          name="nombre"
          placeholder="Nombre completo"
          value={form.nombre}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded-xl bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Contacto */}
        <input
          type="text"
          name="contacto"
          placeholder="Teléfono o correo"
          value={form.contacto}
          onChange={handleChange}
          className="w-full p-3 mb-6 rounded-xl bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Escolaridad */}
        <select
          name="escolaridad"
          value={form.escolaridad}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded-xl bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="" className="text-black">Escolaridad</option>
          <option value="secundaria" className="text-black">Secundaria</option>
          <option value="preparatoria" className="text-black">Preparatoria</option>
          <option value="universidad" className="text-black">Universidad</option>
          <option value="otro" className="text-black">Otro</option>
        </select>

        {/* Institucion */}
        <input
          type="text"
          name="institucion"
          placeholder="Nombre de tu institución"
          value={form.institucion}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded-xl bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />


        

        {/* Botón */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-gray-500 to-gray-800 transition transform shadow-lg ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
        >
          {loading ? "Procesando..." : "Enviar solicitud"}
        </button>
      </form>

      <div className="absolute bottom-10">
        <button
          onClick={retornar}
          type="button"
          className="text-gray-400 hover:text-white transition-colors cursor-pointer text-xs uppercase tracking-widest font-bold"
        >
          ← Volver al inicio
        </button>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default Info;