import { useEffect, useState } from "react";
import homeImg from "../assets/Photo-falaise.jpg";
import "./Home.css";
import CardHouse from "./card-house/CardHouse";

function Home() {
  const [data, setData] = useState([]);

  const displayCards = () => {
    if (data.length === 0) {
      return "";
    }

    return data.map((card) => {
      return <CardHouse key={card.id} house={card} />;
    });
  };

  const fetchJson = () => {
    fetch("./data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(() => data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchJson();
  }, []);

  return (
    <>
      <div className="home">
        <div className="pict-home">
          <img className="photo-home" src={homeImg} />
          <div className="txt-photo">
            <p>Chez vous, partout et ailleurs</p>
          </div>
        </div>
        <div className="cards-house">{displayCards()}</div>
      </div>
    </>
  );
}

export default Home;
