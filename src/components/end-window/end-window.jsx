import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setToZero } from "../../actions/session";
import "./end-window-style.scss";

const EndWindow = ({ showEndWindow }) => {
  const dispatch = useDispatch();
  const session = useSelector(state => state.session);

  const handleClick = () => {
    dispatch(setToZero());
    showEndWindow();
  };

  return (
    <div className="end-window-wrapper">
      <div className="content">
        <h1>Ваше время: {session.time}</h1>

        <div className="lid">
          <p>Правила игры:</p>
          <ol>
            <li>При нажатии на кнопку “старт” запускается таймер.</li>
            <li>
              По нажатию на карточку она открывается, в течении 5 сек нужно
              открыть вторую карточку, если иконки на паре открытых карт
              совпадают они удаляются, если нет - пара открытых карт
              закрываются.
            </li>
            <li>Игра заканчивается когда все пары карт найдены.</li>
          </ol>
        </div>
        <button onClick={handleClick}>Начать заного</button>
      </div>
    </div>
  );
};
export default EndWindow;
