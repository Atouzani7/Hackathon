
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Slider from "./Components/Slider/Slider";
import Home from "@pages/Home";
import Idées from "@pages/Idées";
import Catégories from "@pages/Catégories";
import Ingrédients from "@pages/Ingrédients";
import Pays from "@pages/Pays";
import Navbar from "@components/Navbar/navbar";

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
      <div className="App">
      <Slider />
    </div>
    </BrowserRouter>

  );
}

export default App;
