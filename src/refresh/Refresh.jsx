import { useState } from "react";
import "./Refresh.css";
import { Link } from "react-router-dom";

function Refresh() {
  return (
    <>
      <div className="content-error">
        <p className="nb-error">404</p>
        <p className="txt-error">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/" className="link-back">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </>
  );
}

export default Refresh;
