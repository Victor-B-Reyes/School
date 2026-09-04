import { useNavigate, Outlet, useLocation } from "react-router-dom";

function Navbar(){
    const navigate = useNavigate();
    const location = useLocation();
    const getButtonClass = (path) => {
        const baseClasses = "px-4 py-2 font-semibold rounded-lg transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-blue-500";
        const isActive = path === '/' ? location.pathname === path : location.pathname.startsWith(path);
        if (isActive) {
            return `${baseClasses} bg-blue-600 text-white scale-105 border-b-4 border-blue-700`;
        }
        return `${baseClasses} text-white border-b-4 border-blue-500 hover:bg-blue-600 hover:text-white md:hover:scale-105`;
    };
    return(
        <nav>
            <ul className="flex flex-wrap justify-center items-center p-4 gap-4 list-none">
                <li>
                    <button className={getButtonClass('/')} onClick={() => navigate('/')}>
                        Home
                    </button>
                </li>
                <li>
                    <button className={getButtonClass('/Arduino')} onClick={() => navigate('/Arduino')}>
                        Arduino
                    </button>
                </li>
                <li>
                    <button className={getButtonClass('/IA')} onClick={() => navigate('/IA')}>
                        IA
                    </button>
                </li>
                {/*<li>
                    <button className={getButtonClass('/Redes')} onClick={() => navigate('/Redes')}>
                        Redes
                    </button>
                </li>} */}
            </ul>
        </nav>
    )
}
export default Navbar;