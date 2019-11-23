import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCards, hideCards } from "../../actions/active-cards";
import { toggleCards, toggleCard } from "../../actions/all-cards";
import { addPoint } from "../../actions/session";
import Card from "../card/card";
import "./board-style.scss";

const Board = () => {
  const cardsOnBoard = useSelector(state => state.cardsOnBoard);
  const activeCards = useSelector(state => state.activeCards);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => dispatch(toggleCards()), 5000);
  }, [dispatch]);

  useEffect(() => {
    if (activeCards.length === 2) {
      clearTimeout(activeCards[0].timerId);
      clearTimeout(activeCards[1].timerId);

      setTimeout(() => {
        if (activeCards[0].value === activeCards[1].value) {
          dispatch(hideCards(activeCards[0].id, activeCards[1].id));
          dispatch(addPoint());
        } else {
          dispatch(toggleCard(activeCards[0].id, false));
          dispatch(toggleCard(activeCards[1].id, false));
        }
        dispatch(removeCards());
      }, 1000);
    }
  }, [activeCards, dispatch]);

  return (
    <div className="board-wrapper">
      {cardsOnBoard.map(cardObject => (
        <Card key={cardObject.id} cardObject={cardObject} />
      ))}
    </div>
  );
};

export default Board;
