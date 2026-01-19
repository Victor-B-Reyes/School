import { useEffect } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";

import HomePage from "../module/home/page/homePage";

import ArduinoPage from "../module/arduino/page/arduinoPage";
import Arduino001 from "../module/arduino/component/Arduino001/Arduino001Page";
import DebianPage from "../module/debian/page/debianPage";


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
            <Route path="/Debian" element={<DebianPage/>}>
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        </>
    )
}

export default Enrutamiento;