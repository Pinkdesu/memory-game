import * as types from "../constants";

export const addCard = card => ({
  type: types.ADD_CARD,
  payload: card
});

export const removeCard = id => ({
  type: types.REMOVE_CARD,
  payload: {
    id: id
  }
});

export const removeCards = () => ({
  type: types.REMOVE_CARDS
});

export const setTimer = (id, timerId) => ({
  type: types.SET_TIMER,
  payload: {
    id: id,
    timerId: timerId
  }
});

export const hideCards = (firstID, secondID) => {
  return {
    type: types.HIDE_CARDS,
    payload: {
      firstID,
      secondID
    }
  };
};
