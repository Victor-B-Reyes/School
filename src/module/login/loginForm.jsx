import { useNavigate } from "react-router-dom";
function LoginForm({ form, handleChange, handleSubmit, error, isSidebar = false }) {
    const navigate = useNavigate()
    const solicitud = () => {
        navigate("/Info");
    };
    const irInicio = () => navigate("/");

    return(
      <div className={`flex flex-col w-full items-center justify-center ${!isSidebar ? 'min-h-screen' : ''}`}>
        <form
          onSubmit={handleSubmit}
          className={`${isSidebar ? 'w-full' : 'w-96'} p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl`}
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
          <button
            type="button"
            onClick={solicitud}
            className="text-yellow-500 hover:text-yellow-400 font-medium transition-colors cursor-pointer hover:underline"
          >
            Solicitar acceso
          </button>
        </p>
        <p className="text-sm text-center mt-4">
          <button
            type="button"
            onClick={irInicio}
            className="text-gray-400 hover:text-white transition-colors cursor-pointer text-xs uppercase tracking-widest font-bold"
          >
            ← Regresar al inicio
          </button>
        </p>
      </div>
    )
}
export default LoginForm;