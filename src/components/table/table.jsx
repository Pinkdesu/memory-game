import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { CARD_ARRAY } from "../../constants";
import { initGame } from "../../actions/initGame";
import Board from "../board/board";
import Timer from "../timer/timer";
import StartWindow from "../start-window/start-window";
import "./table-style.scss";
import { toggleCards } from "../../actions/all-cards";

const Table = () => {
  const [startWindowActive, setActive] = useState(true);
  const dispatch = useDispatch();

  const startGame = () => {
    dispatch(initGame(CARD_ARRAY));
    setActive(!startWindowActive);
  };

  return (
    <div className="table-wrapper">
      {!startWindowActive && (
        <>
          <Timer />
          <Board />
        </>
      )}

      {startWindowActive && <StartWindow startGame={startGame} />}
    </div>
  );
};

export default Table;
