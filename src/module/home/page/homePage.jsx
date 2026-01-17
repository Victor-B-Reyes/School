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
            <main>
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