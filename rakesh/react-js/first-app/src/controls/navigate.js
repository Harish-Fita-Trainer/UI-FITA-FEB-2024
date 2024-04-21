import { BrowserRouter, Routes,Route } from "react-router-dom";
//import { Home } from "./Loginform";
import Homepage from "./Home";

export default function Navigator(){
    return(
        <BrowserRouter>
        <div>
            <Routes>
                <route exact path='/Homepage' element={<Homepage />}></route>
            </Routes>
        </div>
        </BrowserRouter>
    )
}