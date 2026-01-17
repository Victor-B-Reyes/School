import { Route, Routes } from "react-router-dom";

import HomePage from "../module/home/page/homePage";
import ArduinoPage from "../module/arduino/page/arduinoPage";


function Enrutamiento(){
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/Arduino" element={<ArduinoPage/>}/>
        </Routes>
    )
}

export default Enrutamiento;