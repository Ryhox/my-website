import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Upload from "./pages/uploadPics";
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
          <Route path="/upload" element={<Upload />} />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/games" element={<Games />} />
          <Route path="*" element={<No/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
