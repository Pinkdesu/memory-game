import React from "react";
import "./board-style.scss";
import Card from "../card/card";

const Board = () => {
  return (
    <div className="board-wrapper">
      <Card cardObject={{ id: 1 }} />
    </div>
  );
};

export default Board;
