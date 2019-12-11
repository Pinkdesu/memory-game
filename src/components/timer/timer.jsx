import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToRating } from "../../actions/rating";
import { setStopWatchValue } from "../../actions/session";
import "./timer-style.scss";

const Timer = () => {
  const dispatch = useDispatch();
  const session = useSelector(state => state.session);
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const timeRef = useRef(time);
  const valueRef = useRef("00:00:00");

  useEffect(() => {
    const id = setInterval(() => {
      setTime(({ hours, minutes, seconds }) => {
        timeRef.current = { hours, minutes, seconds };
        valueRef.current =
          (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
          ":" +
          (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds);

        return seconds < 59
          ? { hours, minutes, seconds: seconds + 1 }
          : minutes < 59
          ? { hours, minutes: minutes + 1, seconds: 0 }
          : { hours: hours + 1, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => {
      clearInterval(id);
      dispatch(setStopWatchValue(valueRef.current));
      dispatch(
        addToRating(
          session.playerName,
          { ...timeRef.current },
          valueRef.current
        )
      );
    };
  }, [dispatch, session.playerName]);

  return (
    <div className="timer-wrapper">
      <span>{valueRef.current}</span>
    </div>
  );
};
export default Timer;
