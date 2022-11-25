
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Slider from "./Components/Slider/Slider";
import Home from "@pages/Home";
import Pays from "@pages/Pays";
import Navbar from "@components/Navbar/navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pays" element={<Pays />} />
      </Routes>
      <div className="App">
      <Slider />
    </div>
    </BrowserRouter>

  );
}

export default App;
