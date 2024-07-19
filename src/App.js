import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Pussy from "./pages/pussy";
import Aboutme from "./pages/aboutme";
import Games from "./pages/games";

import No from "./pages/NO";


function App() {

  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/pussy" element={<Pussy />} />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/games" element={<Games />} />
          <Route path="*" element={<No/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
