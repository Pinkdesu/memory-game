import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTime } from "../../actions/session";
import "./timer-style.scss";

const Timer = () => {
  const dispatch = useDispatch();
  const session = useSelector(state => state.session);

  const timer = useCallback(
    (seconds, minutes, hours) => {
      const add = () => {
        ++seconds;

        if (seconds >= 60) {
          seconds = 0;
          ++minutes;

          if (minutes >= 60) {
            minutes = 0;
            ++hours;
          }
        }

        dispatch(
          setTime(
            (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
              ":" +
              (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
              ":" +
              (seconds > 9 ? seconds : "0" + seconds)
          )
        );

        timer(seconds, minutes, hours);
      };

      let id = setTimeout(add, 1000);
      if (!session.isLaunched) clearTimeout(id);
    },
    [dispatch, session.isLaunched]
  );

  useEffect(() => {
    timer(0, 0, 0);
  }, [timer]);

  return (
    <div className="timer-wrapper">
      <span>{session.value}</span>
    </div>
  );
};
export default Timer;
