import { useState, useEffect } from "react";
import "./Fiche.css";
import Collapse from "./collapse/collapse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import Carrousel from "./carrousel/Carrousel";

function Fiche() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  const fetchJson = () => {
    fetch("../data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const res = data.find((item) => item.id === id);
        if (data && !res) {
          navigate("/error");
        }
        setData(() => res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchJson();
  }, []);

  const displayRanking = (x) => {
    let stars = [];

    for (let i = 1; i <= 5; i++) {
      const color = i <= x ? "#FF6060" : "lightgrey";

      stars.push(<FontAwesomeIcon icon={faStar} style={{ color }} key={i} />);
    }

    return stars;
  };

  return (
    <>
      <div className="fiche-logement">
        {data ? <Carrousel imagesInit={data.pictures} /> : ""}

        <div className="infos-user">
          <div className="appart-user">
            <div className="name-loc">
              <p className="n-appart">{data?.title}</p>
              <p className="n-loc">{data?.location}</p>
            </div>

            <div className="btn-tag">
              {data?.tags.map((item, index) => {
                return (
                  <span key={index} className="tag">
                    <p>{item}</p>
                  </span>
                );
              })}
            </div>
          </div>
          <div className="tag-rating">
            <div className="user-h">
              <p className="user">{data?.host.name}</p>
              <img className="host" src={data?.host.picture} />
            </div>

            <div className="ranking">{displayRanking(data?.rating)}</div>
          </div>
        </div>
      </div>
      <div className="list-collapse">
        <div className="item-col">
          <Collapse
            desc={{
              title: "Description",
              text: data?.description || "",
              equipments: [],
            }}
          />
        </div>

        <div className="item-col">
          <Collapse
            desc={{
              title: "Equipement",
              text: "",
              equipments: data?.equipments || [],
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Fiche;
