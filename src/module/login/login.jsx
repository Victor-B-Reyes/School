import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "./loginForm";

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
            MWDEV Platform
          </h1>
          <p className="text-lg text-gray-300">
            Aprende. Construye. Evoluciona 🚀
          </p>
        </div>
      </div>

      {/* LADO DERECHO */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/software.jpg')" }}
      >
        <LoginForm 
          form={form} 
          handleChange={handleChange} 
          handleSubmit={handleSubmit} 
          error={error} 
        />
      </div>
    </div>
  );
}

export default Login;
