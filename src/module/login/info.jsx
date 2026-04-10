import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cursos } from "../api/data";
function Info() {
    const navigate = useNavigate();
  const [form, setForm] = useState({
    curso: "",
    nombre: "",
    escolaridad: "",
    contacto: ""
  });
  const retornar = () => {
    navigate("/Login");
  };

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.curso || !form.nombre || !form.escolaridad || !form.contacto) {
      setError("Completa todos los campos");
      setSuccess("");
      return;
    }

    console.log(form);

    setError("");
    setSuccess("Solicitud enviada 🚀");

    setForm({
      curso: "",
      nombre: "",
      escolaridad: "",
      contacto: ""
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-cover bg-center" style={{
          backgroundImage: "url('/server.jpg')"
        }}>
      
      <form
        onSubmit={handleSubmit}
        className="w-96 p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl"
      >
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

        {/* Contacto */}
        <input
          type="text"
          name="contacto"
          placeholder="Teléfono o correo"
          value={form.contacto}
          onChange={handleChange}
          className="w-full p-3 mb-6 rounded-xl bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Botón */}
        <button
          type="submit"
          className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-gray-500 to-gray-800 hover:scale-105 transition transform shadow-lg"
        >
          Enviar solicitud
        </button>
        <button
          onClick={retornar}
          className="w-full py-3 mt-2 rounded-xl font-semibold text-white bg-gradient-to-r from-red-500 to-red-800 hover:scale-105 transition transform shadow-lg"
        >
          Regresar
        </button>
      </form>
    </div>
  );
}

export default Info;