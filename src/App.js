import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import "./styles.css";
import Homepage from "./pages/Homepage.js";

const App = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} exact/>
            </Routes>
        </BrowserRouter>
    )
};


export default App;
