import React from "react";
import "./HamburgerMenu.css";
import { useState } from "react";

const HamburgerMenu = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
  };
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <nav>
        <div className="burger-menu">
          <div className={burger_class} onClick={updateMenu}></div>
          <div className={burger_class} onClick={updateMenu}></div>
          <div className={burger_class} onClick={updateMenu}></div>
        </div>
      </nav>
      <div></div>
    </div>
  );
};

export default HamburgerMenu;
