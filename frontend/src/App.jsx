import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import Pays from "@pages/Pays";
import Navbar from "@components/Navbar/navbar";
import HamburgerMenu from "./Components/Burger";
import "./style.css";

function App() {
  return (
    <BrowserRouter>
      <div className="mainContainer">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Pays" element={<Pays />} />
        </Routes>
        <HamburgerMenu />
      </div>
    </BrowserRouter>
  );
}

export default App;
