import { useState } from "react";
import logoFooter from "../assets/LOGO-footer.png";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="Footer">
        <img className="logo-footer" src={logoFooter} />
        <p className="footer-p">© 2020 Kasa. All rights reserved</p>
      </div>
    </>
  );
}

export default Footer;
