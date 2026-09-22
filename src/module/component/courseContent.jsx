import { useParams, useNavigate } from "react-router-dom";
import { content } from "../api/contenidosCourses/contentDesarrolloIot";
import FormularioInteres from "./formularioInteres";
import Header from "../layout/header";
import Footer from "../layout/fooder";
const CourseContent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Lógica de Login para la barra lateral
 

  const data = content.find((item) => item.id_course === parseInt(id));

  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        <h2 className="text-2xl font-bold text-white mb-6">Contenido no disponible</h2>
        <button 
          onClick={() => navigate(-1)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg"
        >
          Regresar
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <Header/>
    <div className="max-w-[1600px] mx-auto p-6 animate-in fade-in duration-500 ">
      
      <div className="flex flex-col lg:flex-row gap-10 ">
        {/* Columna Izquierda: Temario */}
        <div className="lg:w-2/3 ">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
            <div>
              <h1 className="text-4xl font-extrabold text-white border-l-8 border-blue-600 pl-4">
                {data.course}
              </h1>
              <p className="text-gray-400 mt-3">Temario del curso</p>

            </div>
            
            <button 
              onClick={() => navigate(-1)}
              className="w-fit bg-gray-800 hover:bg-black text-white font-bold py-2 px-6 rounded-lg transition-all shadow-lg flex items-center gap-2"
            >
              <span>←</span> Volver
            </button>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-3 mb-8">
            <div className="flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 text-blue-400 px-4 py-2 rounded-xl text-sm font-medium">
              <img src="/icon/agenda.png" alt="Agenda" className="h-5 w-5 object-contain" />
              Próximo inicio: <span className="text-white font-bold">10/10/2026</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 text-blue-400 px-4 py-2 rounded-xl text-sm font-medium">
              <img src="/icon/reloj.png" alt="Reloj" className="h-5 w-5 object-contain" />
              Horarios: <span className="text-white font-bold">Sabados y domingos: 18:00 - 20:00 Hr MX</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 text-blue-400 px-4 py-2 rounded-xl text-sm font-medium">
              <img src="/icon/dinero.png" alt="Dinero" className="h-5 w-5 object-contain" />
              Costos por clase: <span className="text-white font-bold">$125 MX</span>
            </div>
          </div>

          <div className="grid md:grid-cols-1 xl:grid-cols-2 gap-8 h-[70vh] overflow-y-scroll scrollbar-hide pr-2">
            {data.temario.map((tema) => (
              <div
                key={tema.id}
                className="backdrop-blur-md bg-white/5 border border-white/10 shadow-2xl rounded-2xl p-6 border-t-4 border-t-blue-500 transform hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >
                <div className="text-blue-400 font-bold text-xs mb-2 uppercase tracking-widest">
                  Clase {tema.id}
                </div>
                <h2 className="text-xl font-bold text-white mb-4">
                  {tema.title}
                </h2>

                <ul className="space-y-3 flex-grow">
                  {tema.topics.map((topic, index) => (
                    <li
                      key={index}
                      className="text-gray-300 flex items-start gap-2 text-sm border-b border-white/5 pb-2 last:border-0"
                    >
                      <span className="text-blue-400 font-bold">✓</span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Columna Derecha: Componente de Inicio de Sesión */}
        <div className="lg:w-1/3">
          <div className="lg:sticky lg:top-10 p-8 bg-gray-900 border border-gray-700 rounded-3xl shadow-xl overflow-hidden relative">
            {/* Overlay sutil para que el form resalte */}
            <div className="absolute inset-0 opacity-20 bg-gradient-to-b from-blue-600 to-transparent pointer-events-none"></div>
            
            <FormularioInteres curso={data.course} />
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default CourseContent;
