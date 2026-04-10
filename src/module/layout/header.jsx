import { useNavigate, Outlet, useLocation } from "react-router-dom";

function Header (){
    const navigate = useNavigate()
    const SubscriptionPressed = () => {
        navigate(`/Login`);
    }
    return(
    <header className="bg-gray-900 text-white py-5 px-4 relative flex items-center">
  
      {/* Título centrado */}
      <p className="absolute left-1/2 transform -translate-x-1/2 text-2xl sm:text-3xl font-bold">
        MWDEV
      </p>

      {/* Botón a la derecha */}
      <div className="ml-auto">
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