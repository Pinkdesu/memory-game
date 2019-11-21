import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCard, removeCard } from "../../actions/active-card";
import "./card-style.scss";

const Card = ({ cardObject }) => {
  const [isActive, setActive] = useState(false);
  const dispatch = useDispatch();
  const activeCard = useSelector(state => state.activeCard);

  const handleClick = () => {
    if (activeCard.isEmpty) {
      dispatch(addCard(cardObject));
      setActive(true);
      setTimeout(() => {
        setActive(false);
        dispatch(removeCard());
      }, 1000);
    }
  };

  return (
    <div className="card-wrapper" onClick={handleClick}>
      <div className={isActive ? "front front-active" : "front"}>
        <img src="card-back.jpg" alt="" />
      </div>
      <div className={isActive ? "back back-active" : "back"}>
        {cardObject.value}
      </div>
    </div>
  );
};
export default React.memo(Card);
