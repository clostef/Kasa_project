import { useState } from "react";
import logo from "../assets/LOGO-header.png";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="header-nav">
        <img src={logo} />
        <div className="link-nav">
          <p className="header-nav-link">Accueil</p>
          <p className="header-nav-link">A Propos</p>
        </div>
      </div>
    </>
  );
}

export default Header;
