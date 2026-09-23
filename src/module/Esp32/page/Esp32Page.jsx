import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import CardComponet from "../../component/cardComponent";
import { cursos } from "../../api/data";
import Footer from "../../layout/fooder";
import Header from "../../layout/header";
import Navbar from "../../layout/navbar";

function Esp32Page(){
     const location = useLocation();
     const [esp32Courses] = useState(()=>{
        return cursos.filter(curso => Array.isArray(curso.seccion)
            ? curso.seccion.includes("Esp32")
            : curso.seccion === "Esp32");
    });
    return(
        <div>
            <Header />
            <main className="w-full bg-gray-50 pb-2">
            <h1 className="text-4xl font-bold text-center py-2 text-white" id="Cursos">Cursos</h1>
            <Navbar />
             
            <div className="container mx-auto px-4">
                {location.pathname === '/Esp32' ?
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
                    {esp32Courses.map((curso) => (
                        <CardComponet 
                            key={curso.id}
                            id={curso.id}
                            title={curso.title}
                            description={curso.description}
                            imageUrl={curso.imageUrl}
                            seccion={curso.seccion}
                            type={curso.type}
                            finish={curso.finish}
                            fechaInicio={curso.fechaInicio}
                            identifier={curso.identifier}
                        />
                    ))}
                </div> : <Outlet />}
            </div>
        </main>
            <Footer />
        </div>
    )
}

export default Esp32Page;
