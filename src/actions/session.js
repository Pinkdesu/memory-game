import * as types from "../constants";

export const startGame = playerName => ({
  type: types.START_GAME,
  payload: playerName
});

export const finishGame = () => ({
  type: types.FINISH_GAME
});

export const addPoint = () => ({
  type: types.ADD_POINT
});

export const setStopWatch = (value, reset) => ({
  type: types.SET_STOPWATCH,
  payload: {
    value: value,
    reset: reset
  }
});

export const clearSession = () => ({
  type: types.CLEAR_SESSION
});
