import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CARD_ARRAY } from "../../constants";
import { initGame } from "../../actions/initGame";
import { setToZero } from "../../actions/session";
import Board from "../board/board";
import Timer from "../timer/timer";
import StartWindow from "../start-window/start-window";
import EndWindow from "../end-window/end-window";
import "./table-style.scss";

const Table = () => {
  const [startWindowActive, start] = useState(true);
  const [endWindowActive, end] = useState(false);
  const dispatch = useDispatch();
  const session = useSelector(state => state.session);

  const startGame = () => {
    dispatch(initGame(CARD_ARRAY));
    start(!startWindowActive);
  };

  const showEndWindow = useCallback(() => {
    end(!endWindowActive);
  }, [endWindowActive]);

  useEffect(() => {
    if (session.points === 1) showEndWindow();
  }, [session, showEndWindow]);

  return (
    <div className="table-wrapper">
      {!startWindowActive && !endWindowActive && (
        <>
          <Timer />
          <Board />
        </>
      )}

      {startWindowActive && <StartWindow startGame={startGame} />}

      {endWindowActive && <EndWindow showEndWindow={showEndWindow} />}
    </div>
  );
};

export default Table;
