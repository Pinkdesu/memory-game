import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CARD_ARRAY } from "../../constants";
import { addAllCards } from "../../actions/all-cards";
import {
  startGame,
  finishGame,
  setStopWatchValue,
  addPlayerName
} from "../../actions/session";
import { addToRating } from "../../actions/rating";
import { useStopwatch } from "react-timer-hook";
import Board from "../board/board";
import Timer from "../timer/timer";
import StartWindow from "../start-window/start-window";
import EndWindow from "../end-window/end-window";
import "./table-style.scss";

const Table = () => {
  const [startWindowActive, setWindowActive] = useState(true);
  const dispatch = useDispatch();
  const session = useSelector(state => state.session);
  const { seconds, minutes, hours, start, reset } = useStopwatch();

  let timeValue =
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds > 9 ? seconds : "0" + seconds);

  useEffect(() => {
    if (session.points === 18 && session.isLaunched) {
      reset();
      dispatch(setStopWatchValue(timeValue));
      dispatch(finishGame());
      dispatch(
        addToRating(session.playerName, { seconds, minutes, hours }, timeValue)
      );
    }
  }, [dispatch, session, timeValue, reset, seconds, minutes, hours]);

  const initGame = (player = "") => {
    dispatch(startGame());
    dispatch(addAllCards(CARD_ARRAY));
    start();
    if (startWindowActive) {
      dispatch(addPlayerName(player));
      setWindowActive(false);
    }
  };

  return (
    <div className="table-wrapper">
      {!startWindowActive && session.isLaunched && (
        <>
          <Timer timeValue={timeValue} />
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
