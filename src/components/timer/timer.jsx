import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTime } from "../../actions/session";
import { useStopwatch } from "react-timer-hook";
import "./timer-style.scss";

const Timer = () => {
  const dispatch = useDispatch();
  const session = useSelector(state => state.session);
  const { seconds, minutes, hours, start, reset } = useStopwatch();

  useEffect(() => {
    start();
  }, [start]);

  useEffect(() => {
    if (session.isLaunched === false) {
      dispatch(
        setTime(
          (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
            ":" +
            (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
            ":" +
            (seconds > 9 ? seconds : "0" + seconds)
        )
      );
      reset();
    }
  }, [dispatch, hours, reset, minutes, seconds, session.isLaunched]);

  return (
    <div className="timer-wrapper">
      <span>
        {(hours ? (hours > 9 ? hours : "0" + hours) : "00") +
          ":" +
          (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)}
      </span>
    </div>
  );
};
export default Timer;
