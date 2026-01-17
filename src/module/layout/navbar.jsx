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
        return `${baseClasses} text-gray-700 border-b-4 border-blue-500 hover:bg-blue-600 hover:text-white hover:scale-105`;
    };
    return(
        <nav>
            <ul className="flex justify-center items-center p-4 space-x-4 list-none">
                <li>
                    <button className={getButtonClass('/')} onClick={() => navigate('/')}>
                        Home
                    </button>
                    <button className={getButtonClass('/Arduino')} onClick={() => navigate('/Arduino')}>
                        Arduino
                    </button>
                    <button className={getButtonClass('/Debian')} onClick={() => navigate('/Debian')}>
                        Debian
                    </button>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;