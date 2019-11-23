import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CARD_ARRAY } from "../../constants";
import { addAllCards } from "../../actions/all-cards";
import { startGame, finishGame } from "../../actions/session";
import Board from "../board/board";
import Timer from "../timer/timer";
import StartWindow from "../start-window/start-window";
import EndWindow from "../end-window/end-window";
import "./table-style.scss";

const Table = () => {
  const [startWindowActive, start] = useState(true);
  const dispatch = useDispatch();
  const session = useSelector(state => state.session);

  const initGame = () => {
    dispatch(startGame());
    dispatch(addAllCards(CARD_ARRAY));
    if (startWindowActive) start(false);
  };

  useEffect(() => {
    if (session.points === 1 && session.isLaunched) {
      clearTimeout(session.timerId);
      dispatch(finishGame());
    }
  }, [dispatch, session]);

  return (
    <div className="table-wrapper">
      {!startWindowActive && session.isLaunched && (
        <>
          <Timer />
          <Board />
        </>
      )}

      {startWindowActive && <StartWindow initGame={initGame} />}

      {!(session.isLaunched || startWindowActive) && (
        <EndWindow initGame={initGame} />
      )}
    </div>
  );
};

export default Table;
