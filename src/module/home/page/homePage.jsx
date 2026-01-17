import Footer from "../../layout/fooder";
import Header from "../../layout/header";
import Navbar from "../../layout/navbar";


function HomePage(){
    return(
    <div>
        <Header />
        <div className="bg-white text-white min-h-screen">
            <main className="h-[calc(100vh-80px)] px-4 flex flex-col items-center justify-center text-center text-gray-800">
                <div className="max-w-2xl">
                <img src="./Logo.png" alt="Logo" className="w-48 mx-auto mb-4"/>
                <h1 className="text-5xl font-extrabold tracking-tight mb-2">
                    <Navbar />
                </h1>
                <p className="text-lg text-gray-600">
                    Soluciones de software a la medida para tu negocio.
                </p>
                </div>
            </main>
        </div>
        <Footer/>
    </div>
    )
}

export default HomePage;