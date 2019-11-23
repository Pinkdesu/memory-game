import * as types from "../constants";

export const addAllCards = cards => {
  cards.sort(() => 0.5 - Math.random());

  return {
    type: types.ADD_ALL_CARDS,
    payload: cards
  };
};

export const toggleCard = (id, value) => {
  return {
    type: types.TOGGLE_CARD,
    payload: {
      id: id,
      value: value
    }
  };
};

export const toggleCards = () => {
  return {
    type: types.TOGGLE_CARDS
  };
};
