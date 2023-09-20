import { useState } from "react";
import "./CardHouse.css";
import { Link } from "react-router-dom";

function CardHouse({ house }) {
  return (
    <>
      <Link to={`/fiche/${house.id}`}>
        <div
          className="card"
          style={{ backgroundImage: `url(${house.cover})` }}
        >
          <p className="title-card">{house.title}</p>
        </div>
      </Link>
    </>
  );
}

export default CardHouse;
