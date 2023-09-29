import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Uml from "./pages/Uml";
import Merise from "./pages/Merise";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/UML" element={<Uml />} />
        <Route path="/Merise" element={<Merise />} />
        {/* path="*" fonctionne si jamais l'url ne correspond a rien de déclaré au dessus */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
