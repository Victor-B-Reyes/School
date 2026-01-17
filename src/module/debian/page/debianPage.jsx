import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import CardComponet from "../../component/cardComponent";
import { cursos } from "../../api/data";
import Footer from "../../layout/fooder";
import Header from "../../layout/header";
import Navbar from "../../layout/navbar";

function DebianPage(){
     const location = useLocation();
     const [debianCourses] = useState(()=>{
        return cursos.filter(curso => curso.seccion === "Debian");
    });
    return(
        <div>
            <Header />
            <main className="w-full bg-gray-50">
            <Navbar />
            <div className="container mx-auto px-4">
                {location.pathname === '/Debian' ?
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
                    {debianCourses.map((curso) => (
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
                </div> : <Outlet />}
            </div>
        </main>
            <Footer />
        </div>
    )
}

export default DebianPage;