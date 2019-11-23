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

export const setTime = value => ({
  type: types.SET_TIME,
  payload: value
});

export const clearSession = () => ({
  type: types.CLEAR_SESSION
});
