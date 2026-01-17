import { Route, Routes } from "react-router-dom";

import HomePage from "../module/home/page/homePage";

import ArduinoPage from "../module/arduino/page/arduinoPage";
import Arduino001 from "../module/arduino/component/Arduino001/Arduino001Page";
import DebianPage from "../module/debian/page/debianPage";



function Enrutamiento(){
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/Arduino" element={<ArduinoPage/>}>
                <Route path="Arduino_intro" element={<Arduino001/>}/>
                <Route path="Arduino_Preuba" element={<>Pruba</>}/>
            </Route>
            <Route path="/Debian" element={<DebianPage/>}>
                <Route path="admin-debian" element={<>admin-debian</>}/>
                <Route path="porque-linux" element={<>porque-linux</>}/>
            </Route>

        </Routes>
    )
}

export default Enrutamiento;