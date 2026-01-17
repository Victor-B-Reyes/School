import { Route, Routes } from "react-router-dom";

import HomePage from "../module/home/page/homePage";

import ArduinoPage from "../module/arduino/page/arduinoPage";
import Arduino001 from "../module/arduino/component/Arduino001/Arduino001Page";



function Enrutamiento(){
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/Arduino" element={<ArduinoPage/>}>
                <Route path="Arduino_intro" element={<Arduino001/>}/>
                <Route path="Arduino_Preuba" element={<>Pruba</>}/>
            </Route>
        </Routes>
    )
}

export default Enrutamiento;