import Navbar from "@components/Navbar/navbar";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import Idées from "@pages/Idées";
import Catégories from "@pages/Catégories";
import Ingrédients from "@pages/Ingrédients";
import Pays from "@pages/Pays";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path to="/" element={<Home />} />
        <Route path to="/Idées" element={<Idées />} />
        <Route path to="/Catégories" element={<Catégories />} />
        <Route path to="/Ingrédient" element={<Ingrédients />} />
        <Route path to="/Pays" element={<Pays />} />
      </Routes>
      <div>
        <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
