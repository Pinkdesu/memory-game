import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCard, removeCard, setTimer } from "../../actions/active-cards";
import { toggleCard } from "../../actions/all-cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./card-style.scss";

const Card = ({ cardObject }) => {
  const activeCards = useSelector(state => state.activeCards);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (!cardObject.isActive && activeCards.length < 2) {
      dispatch(toggleCard(cardObject.id, true));
      dispatch(addCard(cardObject));

      const timer = setTimeout(() => {
        dispatch(toggleCard(cardObject.id, false));
        dispatch(removeCard(cardObject.id));
      }, 5000);

      dispatch(setTimer(cardObject.id, timer));
    }
  };

  return (
    <div
      className={cardObject.isHidden ? "card-wrapper hidden" : "card-wrapper"}
      onClick={handleClick}
    >
      <div className={cardObject.isActive ? "front front-active" : "front"}>
        <img src="card-back.jpg" alt="" />
      </div>
      <div className={cardObject.isActive ? "back back-active" : "back"}>
        <FontAwesomeIcon
          icon={cardObject.image}
          color={cardObject.color}
          size="2x"
        />
      </div>
    </div>
  );
};
export default React.memo(Card);
