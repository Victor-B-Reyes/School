import { useEffect } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";

import HomePage from "../module/home/page/homePage";
import Login from "../module/login/login";
import Info from "../module/login/info";

import ArduinoPage from "../module/arduino/page/arduinoPage";
import Arduino001 from "../module/arduino/component/Arduino001/Arduino001Page";

import DebianPage from "../module/debian/page/debianPage";

import FundamentosPage from "../module/fundamentos/page/fundamentosPage";
import Fundamentos001 from "../module/fundamentos/component/Fundamentos001/Fundamentos001Page";

import IAPage from "../module/IA/page/IAPage";
import IA001 from "../module/IA/component/IA001/IA001Page";

import FrontendPage from "../module/frontEnd/page/frontendPage";
import Frontend001 from "../module/frontEnd/component/Frontend001/Frontend001Page";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function Enrutamiento(){
    return(
        <>
        <ScrollToTop/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/Arduino" element={<ArduinoPage/>}>
                <Route path="Arduino_intro" element={<Arduino001/>}/>
            </Route>
            <Route path="/Fundamentos" element={<FundamentosPage/>}>
                <Route path="Fundamentos_intro" element={<Fundamentos001/>}/>
            </Route>
            <Route path="/Debian" element={<DebianPage/>}>
            </Route>
            <Route path="/IA" element={<IAPage/>}>
                <Route path="IA_basico" element={<IA001/>}/>
            </Route>
            <Route path="/Frontend" element={<FrontendPage/>}>
                <Route path="Frontend_intro" element={<Frontend001/>}/>
            </Route>
            <Route path="/Login" element={<Login/>} />
            <Route path="/Info" element={<Info/>} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        </>
    )
}

export default Enrutamiento;