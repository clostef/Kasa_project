import { useState } from "react";
import logo from "../assets/LOGO-header.png";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header-nav">
        <img className="logo-nav" src={logo} />
        <div className="link-nav">
          <Link to="/" className="header-nav-link">
            Accueil
          </Link>
          <Link to="/about" className="header-nav-link">
            A Propos
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
