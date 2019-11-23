import * as types from "../constants";

export const addToRating = (playerName, time, value) => ({
  type: types.ADD_TO_RATING,
  payload: {
    playerName: playerName,
    time: time,
    value: value
  }
});
