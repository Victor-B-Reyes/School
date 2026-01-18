import { useLocation, Outlet } from "react-router-dom";
import CardComponet from "../../component/cardComponent";
import { cursos } from "../../api/data";
import Footer from "../../layout/fooder";
import Header from "../../layout/header";
import Navbar from "../../layout/navbar";


function HomePage(){
    const location = useLocation();
    return(
    <div>
        <Header />
        <div className="bg-white text-white min-h-screen">
            <main className="pb-2">
                <div className="w-full text-gray-800 mb-8 bg-cover bg-center" style={{ backgroundImage: "url(./server.jpg)" }}>
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            {/* Header / Profile */}
                            <div className="md:flex">
                                <div className="md:w-1/3 bg-gray-900 text-white p-8 flex flex-col items-center justify-center text-center">
                                    <div className="w-40 h-40 mb-4 rounded-full border-4 border-blue-500 overflow-hidden shadow-lg">
                                        <img 
                                            className="w-full h-full object-cover" 
                                            src="./img/NoImg.jpg" 
                                            alt="Foto de Víctor"
                                        />
                                    </div>
                                    <h1 className="text-3xl font-bold mb-2">Víctor B.R.</h1>
                                    <p className="text-blue-400 font-medium mb-4">Desarrollador Full Stack</p>
                                    <div className="space-y-2 text-sm text-gray-300">
                                        <a href="mailto:victor_blanco_reyes@outlook.com" className="block hover:text-white transition-colors">
                                            victor_blanco_reyes@outlook.com
                                        </a>
                                        <a href="https://wa.me/message/SASRL3RSQKZQA1" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">
                                            +52 921 306 8558
                                        </a>
                                    </div>
                                </div>
                                <div className="md:w-2/3 p-8">
                                    <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Acerca de mí</h2>
                                    <p className="text-gray-600 leading-relaxed text-justify">
                                        Apasionado por la electrónica, la programación de microcontroladores y el desarrollo de sistemas automatizados. 
                                        Cuento con experiencia en el manejo de placas ESP32 y Arduino Uno, así como en la programación y configuración de PLC Siemens S7-1200 y PLC IMO iSmart.
                                        <br /><br />
                                        Me interesa el desarrollo de soluciones tecnológicas que integren hardware y software, aprovechando mis conocimientos en Linux (Debian) y programación en Python, JavaScript, C# y Arduino.
                                        Además, tengo experiencia en bases de datos MySQL y en desarrollo web utilizando Angular, React y Node.js.
                                        <br /><br />
                                        Mi objetivo es seguir creciendo profesionalmente en el ámbito de la automatización industrial, el IoT y el desarrollo de software, aportando soluciones innovadoras y eficientes.
                                    </p>
                                </div>
                            </div>

                            {/* Details Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-gray-200">
                                {/* Experience */}
                                <div className="p-8 border-b md:border-b-0 md:border-r border-gray-200">
                                    <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                                        <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">💼</span> Experiencia
                                    </h2>
                                    <div className="space-y-6">
                                        <div className="relative pl-4 border-l-2 border-gray-200">
                                            <h3 className="font-bold text-gray-800">ERP Business Inteligent</h3>
                                            <p className="text-sm text-blue-600 mb-1">Marzo 2025 - Actualidad</p>
                                            <p className="text-sm text-gray-600">Desarrollador Full Stack</p>
                                        </div>
                                        <div className="relative pl-4 border-l-2 border-gray-200">
                                            <h3 className="font-bold text-gray-800">Instituto Intec Hispanoamericano</h3>
                                            <p className="text-sm text-blue-600 mb-1">Abril 2024 - Junio 2025</p>
                                            <p className="text-sm text-gray-600">Profesor de tiempo completo (Mantenimiento, Diseño, Web)</p>
                                        </div>
                                        <div className="relative pl-4 border-l-2 border-gray-200">
                                            <h3 className="font-bold text-gray-800">ED Publicidad</h3>
                                            <p className="text-sm text-blue-600 mb-1">Agosto 2024 - Octubre 2023</p>
                                            <p className="text-sm text-gray-600">Desarrollador Full Stack</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Skills & Education */}
                                <div className="p-8 bg-gray-50">
                                    <div className="mb-8">
                                        <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                                            <span className="bg-green-100 text-green-600 p-2 rounded-lg mr-3">🛠️</span> Habilidades
                                        </h2>
                                        <div className="flex flex-wrap gap-2">
                                            {['Python', 'JavaScript', 'Arduino', 'React', 'Node.js', 'Angular', 'MySQL', 'Linux', 'PLC Siemens', 'Adobe Suite'].map(skill => (
                                                <span key={skill} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600 shadow-sm">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                                            <span className="bg-purple-100 text-purple-600 p-2 rounded-lg mr-3">🎓</span> Educación
                                        </h2>
                                        <div className="space-y-4">
                                            <div>
                                                <h3 className="font-semibold text-gray-800">Ing. Sistemas Computacionales</h3>
                                                <p className="text-sm text-gray-500">Instituto Tecnológico de Tuxtepec (2019-2025)</p>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="text-4xl font-bold text-center my-8">Cursos</h1>
                <Navbar />
                <div className="container mx-auto px-4">
                {location.pathname === '/' ? 
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
                    {cursos.map((curso) => (
                        <CardComponet 
                            key={curso.id}
                            title={curso.title}
                            description={curso.description}
                            imageUrl={curso.imageUrl}
                            seccion={curso.seccion}
                            type={curso.type}
                            identifier={curso.identifier}
                        />
                    ))}
                </div> 
                : <Outlet />}
                </div>
            </main>
        </div>
        <Footer/>
    </div>
    )
}

export default HomePage;