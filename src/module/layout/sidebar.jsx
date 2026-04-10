import { useState , useEffect} from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Menu, School} from "lucide-react";

// Array de objetos para definir los items del menú
const menuItems = [
  { name: "School", traduc: "Escuela", icon: School },
];
const sucursales = [
]

function Sidebar(){
    const [collapsed, setCollapsed] = useState(false);
    const [hora, setHora] = useState(new Date());
    const navigate = useNavigate();
    useEffect(() => {
    const intervalo = setInterval(() => {
        setHora(new Date());
      }, 1000);

      // Limpieza cuando el componente se desmonta
      return () => clearInterval(intervalo);
    }, []);

    return(
    <div
    className={`h-screen bg-gray-900 text-white transition-all duration-300 flex flex-col justify-between ${
    collapsed ? "w-20" : "w-64"
    }`}
    >

    <div className="flex flex-col flex-1 overflow-hidden">
      {/* Logo or Header */}
      <div className="p-4 border-b border-gray-700">
        <button
        onClick={() => setCollapsed(!collapsed)}
        className="w-full flex items-center gap-2 hover:bg-gray-800 p-2 rounded transition-colors"
        >
        <Menu className="w-5 h-5" />
        {!collapsed && <span><img src="/Logo.png" alt="Logo" className="mx-auto mb-4"/></span>}
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={`/${item.name.toLowerCase()}`}
                className={({ isActive }) =>
                  `flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 ${
                    isActive ? 'bg-blue-600 text-white shadow-md' : 'hover:bg-gray-800 text-gray-300'
                  }`
                }
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {!collapsed && (
                  <span className="text-sm font-medium truncate">
                    {item.traduc}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
    <div className="p-4 border-t border-gray-700">
      <div className="p-2 text-center">
         Root
      </div>
      <button
        onClick={() => navigate('/')}
        className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
      >
        {!collapsed ? (
          <>
            <span className="text-sm font-medium">Salir</span>
          </>
        ) : (
          <span className="text-lg font-bold">X</span>
        )}
      </button>
    </div>
    </div>
    )
}

export default Sidebar;