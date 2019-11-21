import React from "react";
import { useSelector } from "react-redux";
import Card from "../card/card";
import "./board-style.scss";

const Board = () => {
  const cardsOnBoard = useSelector(state => state.cardsOnBoard);

  return (
    <div className="board-wrapper">
      {cardsOnBoard.map(cardObject => (
        <Card key={cardObject.id} cardObject={cardObject} />
      ))}
    </div>
  );
};

export default Board;
