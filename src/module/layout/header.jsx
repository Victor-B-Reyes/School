import { useNavigate, Outlet, useLocation } from "react-router-dom";

function Header (){
    const navigate = useNavigate()
    const SubscriptionPressed = () => {
        navigate(`/Login`);
    }
    return(
    <header className="bg-gray-900 text-white py-5 px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
  
      {/* Título centrado */}
      <p className="text-2xl sm:text-3xl font-bold">
        MWDEV
      </p>

      {/* Botón a la derecha */}
      <div>
        <button 
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300" 
          onClick={SubscriptionPressed}
        >
          Iniciar Sesión
        </button>
      </div>

    </header>

    )
}

export default Header;