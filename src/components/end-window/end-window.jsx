import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearSession } from "../../actions/session";
import "./end-window-style.scss";

const EndWindow = ({ initGame }) => {
  const dispatch = useDispatch();
  const session = useSelector(state => state.session);
  const ratingList = useSelector(state => state.ratingList);
  const handleClick = () => {
    dispatch(clearSession());
    initGame();
  };

  return (
    <div className="end-window-wrapper">
      <div className="content">
        <h1>Поздравляем, {session.playerName}!</h1>
        <h2>Ваш результат: {session.value}</h2>
        <div className="lid">
          <p>Рейтинг:</p>
          <ol>
            {ratingList.map(({ playerName, value }) => (
              <li key={`${playerName}#${value}`}>
                {playerName} - {value}
              </li>
            ))}
          </ol>
        </div>
        <button onClick={handleClick}>Начать заново</button>
      </div>
    </div>
  );
};
export default EndWindow;
