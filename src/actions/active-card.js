import * as types from "../constants";

export const addCard = card => ({
  type: types.ADD_CARD,
  payload: card
});

export const removeCard = () => ({
  type: types.REMOVE_CARD
});
