import { useNavigate, Outlet, useLocation } from "react-router-dom";
function CardComponet({ title, description, imageUrl, seccion, type, identifier, finish }) {
    const navigate = useNavigate()
    const location = useLocation()
    console.log(type);
    const cartPressed = () => {
        console.log(`Card "${identifier}" pressed.`);
        navigate(`/${seccion}/${identifier}`);
    }
    const SubscriptionPressed = () => {
        console.log(`Subscription for "${identifier}" pressed.`);
        navigate(`/subscription/${identifier}`);
    }
    return(
        <div className="w-full rounded-lg overflow-hidden shadow-2xl bg-white transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
            <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-gray-800">{title}</div>
                <p className="text-gray-600 text-base">
                    {description}
                </p>
            </div>
            {!finish ? (
                <div className="px-6 pt-4 pb-4 mt-auto">
                    <button disabled className="w-full bg-gray-400 cursor-not-allowed text-white font-bold py-2 px-4 rounded-lg">
                        Próximamente..
                    </button>
                </div>
            ) : type === "Free" ? (
                <div className="px-6 pt-4 pb-4 mt-auto">
                    <button 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300" 
                        onClick={cartPressed}
                    >
                        Ver más
                    </button>
                </div>
            ) : (
                <div className="px-6 pt-4 pb-4 mt-auto">
                    <button 
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300" 
                        onClick={SubscriptionPressed}
                    >
                        Suscribirse
                    </button>
                </div>
            )}
        </div>
    )
}

export default CardComponet;