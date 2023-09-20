import { useState } from "react";
import "./Collapse.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Collapse({ desc, isSmall }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="main-coll">
        <div className="coll" style={{ height: isSmall ? "30px" : "" }}>
          <p>{desc.title}</p>
          <span
            className={`collapse-btn ${
              isOpen ? "rotate rotate-down rotate" : "rotate"
            }`}
            onClick={toggleIsOpen}
          >
            <FontAwesomeIcon icon={faChevronUp} />
          </span>
        </div>

        <div className={`content-coll ${isOpen ? "active" : ""}`}>
          <p className="txt-coll">{desc.text}</p>
          {desc.equipments.map((eq, index) => {
            return (
              <p key={index} className="txt-coll">
                {eq}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Collapse;
