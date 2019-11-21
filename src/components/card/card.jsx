import React, { useState } from "react";
import "./card-style.scss";

const Card = ({ cardObject }) => {
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive);
    console.log(cardObject.id);
  };

  return (
    <div className="card-wrapper" onClick={handleClick}>
      <div className={isActive ? "front front-active" : "front"}>
        <img src="card-back.jpg" alt="" />
      </div>
      <div className={isActive ? "back back-active" : "back"}>
        {cardObject.id}
      </div>
    </div>
  );
};
export default React.memo(Card);
