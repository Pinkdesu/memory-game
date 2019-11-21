import React, { useState } from "react";
import "./table-style.scss";
import Board from "../board/board";
import Timer from "../timer/timer";
import StartWindow from "../start-window/start-window";

const Table = () => {
  const [startWindowActive, setActive] = useState(true);

  const startGame = () => {
    setActive(!startWindowActive);
  };

  return (
    <div className="table-wrapper">
      <Timer />

      <Board />

      {startWindowActive && <StartWindow startGame={startGame} />}
    </div>
  );
};

export default Table;
