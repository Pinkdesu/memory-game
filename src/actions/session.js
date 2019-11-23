import * as types from "../constants";

export const startGame = playerName => ({
  type: types.START_GAME,
  payload: playerName
});

export const finishGame = () => ({
  type: types.FINISH_GAME
});

export const addPlayerName = name => ({
  type: types.ADD_PLAYER_NAME,
  payload: name
});

export const addPoint = () => ({
  type: types.ADD_POINT
});

export const setStopWatchValue = value => ({
  type: types.SET_STOPWATCH_VALUE,
  payload: value
});

export const clearSession = () => ({
  type: types.CLEAR_SESSION
});
