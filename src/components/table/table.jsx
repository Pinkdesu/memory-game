import React, { useState } from "react";
import "./table-style.scss";
import Board from "../board/board";
import Timer from "../timer/timer";
import StartWindow from "../start-window/start-window";

const Table = () => {
  const [startWindowActive, setActive] = useState(true);

  return (
    <div className="table-wrapper">
      <Timer />

      <Board />

      {startWindowActive && <StartWindow />}
    </div>
  );
};

export default Table;
