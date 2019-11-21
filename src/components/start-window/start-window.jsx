import React from "react";
import "./start-window-style.scss";

const StartWindow = ({ startGame }) => {
  return (
    <div className="start-window-wrapper">
      <div className="content">
        <h1>Memory Game</h1>

        <div className="lid">
          <p>Правила игры:</p>
          <ul>
            <li>При нажатии на кнопку “старт” запускается таймер.</li>
            <li>
              По нажатию на карточку она открывается, в течении 5 сек нужно
              открыть вторую карточку, если иконки на паре открытых карт
              совпадают они удаляются, если нет - пара открытых карт
              закрываются.
            </li>
            <li>Игра заканчивается когда все пары карт найдены.</li>
          </ul>
        </div>
        <button onClick={startGame}>Начать</button>
      </div>
    </div>
  );
};
export default StartWindow;
