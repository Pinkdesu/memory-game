import React from "react";
import "./timer-style.scss";

const Timer = ({ timeValue }) => {
  return (
    <div className="timer-wrapper">
      <span>{timeValue}</span>
    </div>
  );
};
export default Timer;
