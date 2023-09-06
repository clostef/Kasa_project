import { useState } from "react";
import homeImg from "../assets/Photo-falaise.jpg";
import "./Home.css";
import CardHouse from "./card-house/CardHouse";

function Home() {
  const cards = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <div className="home">
        <div className="pict-home">
          <img className="photo-home" src={homeImg} />
          <p className="txt-photo">Chez vous, partout et ailleurs</p>
        </div>
        <div className="cards-house">
          {cards.map((card) => {
            return <CardHouse />;
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
