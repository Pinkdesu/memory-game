import React, { useState } from "react";
import "./start-window-style.scss";

const StartWindow = ({ initGame }) => {
  const [text, setChange] = useState("");
  const handleChange = e => {
    setChange(e.target.value);
  };

  const handleClick = () => {
    if (text !== "") initGame(text);
    else alert("Введите игровое имя");
  };

  return (
    <div className="start-window-wrapper">
      <div className="content">
        <h1>Memory Game</h1>

        <div className="lid">
          <input
            type="text"
            placeholder="Имя"
            onChange={handleChange}
            value={text}
          />

          <p>Описание игры:</p>
          <ol>
            <li>Введите своё игровое имя, чтобы отображаться в рейтинге.</li>
            <li>При нажатии на кнопку “старт” запускается игра.</li>
            <li>
              По нажатию на карточку она открывается, в течении 5 сек необходимо
              открыть вторую карточку, если иконки на паре открытых карт
              совпадают они удаляются, если нет - пара открытых карт
              закрываются.
            </li>
            <li>Игра заканчивается когда все пары карт найдены.</li>
          </ol>
        </div>
        <button onClick={handleClick}>Старт</button>
      </div>
    </div>
  );
};
export default StartWindow;
