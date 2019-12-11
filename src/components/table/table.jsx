import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CARD_ARRAY } from "../../constants";
import { addAllCards } from "../../actions/all-cards";
import { startGame, finishGame, addPlayerName } from "../../actions/session";
import Board from "../board/board";
import Timer from "../timer/timer";
import StartWindow from "../start-window/start-window";
import EndWindow from "../end-window/end-window";
import "./table-style.scss";

const Table = () => {
  const [startWindowActive, setWindowActive] = useState(true);
  const dispatch = useDispatch();
  const session = useSelector(state => state.session);

  useEffect(() => {
    if (session.points === 18 && session.isLaunched) {
      dispatch(finishGame());
    }
  }, [dispatch, session]);

  const initGame = (player = "") => {
    dispatch(startGame());
    dispatch(addAllCards(CARD_ARRAY));
    if (startWindowActive) {
      dispatch(addPlayerName(player));
      setWindowActive(false);
    }
  };

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

export default React.memo(Table);
