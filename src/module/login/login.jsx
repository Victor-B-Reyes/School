import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("Completa todos los campos");
      return;
    }

    // Simulación login
    if (form.email === "admin@edu.com" && form.password === "123456") {
      setError("");
      navigate("/Home");
    } else {
      setError("Credenciales incorrectas");
    }
  };

  const solicitud = () => {
    navigate("/Info");
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-black via-gray-900 to-blue-900">
      
      {/* LADO IZQUIERDO */}
      <div
        className="hidden md:flex w-1/2 items-center justify-center relative bg-cover bg-center"
      >
        {/* overlay futurista */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

        <div className="relative text-white text-center px-10">
          <h1 className="text-5xl font-bold mb-4 tracking-wide">
            MWDEVPlatform
          </h1>
          <p className="text-lg text-gray-300">
            Aprende. Construye. Evoluciona 🚀
          </p>
        </div>
      </div>

      {/* LADO DERECHO */}
      <div className="flex flex-col w-full md:w-1/2 items-center justify-center"
      style={{
          backgroundImage: "url('/software.jpg')"
        }}
      >
        
        <form
          onSubmit={handleSubmit}
          className="w-96 p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl"
        >
          <h2 className="text-3xl font-bold text-center text-white mb-6">
            Iniciar Sesión
          </h2>
          <div className="w-full mb-6">
            <img
              src="/Logo.png"
              alt="Logo"
              className="w-40 h-auto object-contain mb-6 mx-auto block"
            />
          </div>
        
          {error && (
            <p className="text-red-400 text-sm text-center mb-4">
              {error}
            </p>
          )}

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 mb-4 rounded-xl bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={handleChange}
            className="w-full p-3 mb-6 rounded-xl bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Botón */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition transform shadow-lg"
          >
            Entrar
          </button>
        </form>

        {/* Link */}
        <p className="text-sm text-center mt-6 text-gray-300">
          ¿No tienes cuenta?{" "}
          <span
            onClick={solicitud}
            className="text-blue-400 cursor-pointer hover:underline"
          >
            Solicitar acceso
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;

