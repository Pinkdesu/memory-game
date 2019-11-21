import React, { useState } from "react";
import "./card-style.scss";

const Card = ({ cardObject }) => {
  const [isActive, setActive] = useState(false);

  return (
    <div className="card-wrapper" onClick={() => setActive(!isActive)}>
      <div className={isActive ? "front front-active" : "front"}>
        <img src="card-back.jpg" alt="" />
      </div>
      <div className={isActive ? "back back-active" : "back"}>
        {cardObject.id}
      </div>
    </div>
  );
};
export default Card;
