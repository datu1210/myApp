import React from "react";
import "./Navbar.css";
import CartWidget from "./CartWidget.js";

export const Navbar = () => {
  return (
    <>
    
      <div className="topnav">
        <div className="logo">HTC</div>
        <ul className ="navList">
          <li className="navItem"><a href="#home">Home</a></li>
          <li className="navItem"><a href="#about">About</a></li>
          <li className="navItem"><a href="#categorias">Categorias</a></li>
          <li className="navItem"><a href="#contacto">Contacto</a></li>
        </ul>
        <div className="navItem"><CartWidget/></div>
      </div>
      
    </> 
  );
};
