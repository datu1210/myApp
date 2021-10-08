import React from "react";
import CartWidget from "./CartWidget.js";
import lightningLogo from "../../Assets/images/lightningLogo.png";

import "./NavBar.css";

export const NavBar = () => {
  return (
    <>
      <div className="topnav">
        <img src={lightningLogo} alt="lightning" className="navlogo" />

        <ul className="navList">
          <li className="navItem">
            <a href="#home">Home</a>
          </li>
          <li className="navItem">
            <a href="#about">About</a>
          </li>
          <li className="navItem">
            <a href="#categorias">Categorias</a>
          </li>
          <li className="navItem">
            <a href="#contacto">Contacto</a>
          </li>
          <li className="navItem">
            <CartWidget />
          </li>
        </ul>
      </div>
    </>
  );
};
