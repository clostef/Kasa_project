import { useState } from "react";
import "./About.css";
import aboutImg from "../assets/Background-a.jpg";
import Collapse from "../fiche/collapse/collapse";

function About() {
  const liste = [
    {
      title: "Fiabilité",
      equipments: [],
      text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    },
    {
      title: "Respect",
      equipments: [],
      text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      title: "Service",
      equipments: [],
      text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      title: "Sécurité",
      equipments: [],
      text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  return (
    <>
      <div className="main-pic">
        <img className="pic-back" src={aboutImg} />
      </div>
      <div className="list-collapse-a">
        {liste.map((item, index) => {
          return (
            <div key={index} className="item-col-a">
              <Collapse desc={item} isSmall={true} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default About;
