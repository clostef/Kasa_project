import { useState, useEffect } from "react";
import "./Carrousel.css";
import background from "../../assets/Background.jpg";
import btnLeft from "../../assets/btnLeft.png";
import btnRight from "../../assets/btnRight.png";

function Carrousel({ imagesInit }) {
  const [images, setImages] = useState(imagesInit);
  const [indexCurrent, setIndexCurrent] = useState(0);

  const right = () => {
    setIndexCurrent((i) => {
      const maxIndex = images.length - 1;
      if (i === maxIndex) {
        return 0;
      }

      return i + 1;
    });
  };

  const left = () => {
    setIndexCurrent((i) => {
      const maxIndex = images.length - 1;
      if (i === 0) {
        return maxIndex;
      }

      return i - 1;
    });
  };

  const getCurrentUrl = () => {
    console.log(images[indexCurrent]);
    return images[indexCurrent];
  };

  return (
    <div className="banner">
      <img className="photo-carrousel" src={getCurrentUrl()} />
      <img
        className="arrow arrow_left"
        src={btnLeft}
        alt="arrow_left"
        onClick={left}
      />
      <img
        className="arrow arrow_right"
        src={btnRight}
        alt="arrow_right"
        onClick={right}
      />
      <div className="dots">
        <p>
          {indexCurrent + 1} / {images.length}
        </p>
      </div>
    </div>
  );
}

export default Carrousel;
