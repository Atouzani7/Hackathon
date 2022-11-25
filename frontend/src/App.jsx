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
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Idées" element={<Idées />} />
        <Route path="/Catégories" element={<Catégories />} />
        <Route path="/Ingrédient" element={<Ingrédients />} />
        <Route path="/Pays" element={<Pays />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
