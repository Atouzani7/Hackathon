import React from "react";
import "./HamburgerMenu.css";
import { useState } from "react";

function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <div className="burger-menu" onClick={toggleMenu}>
        <div className={`burger-bar ${open ? "clicked" : "unclicked"}`} />
        <div className={`burger-bar ${open ? "clicked" : "unclicked"}`} />
        <div className={`burger-bar ${open ? "clicked" : "unclicked"}`} />
      </div>
      <div className={`menu ${open ? "open" : "hidden"}`}>
        <nav>
          <ul>
            <li>HOME</li>
            <li>Pays</li>
            <li>Catégories</li>
            <li>Ingrédients</li>
            <li>Idées</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default HamburgerMenu;
