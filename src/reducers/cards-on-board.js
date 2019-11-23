import * as types from "../constants";

const initialState = [];

const cardsOnBoard = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_ALL_CARDS:
      return payload;
    case types.HIDE_CARDS:
      return [...state].map(cardObj => {
        if (cardObj.id === payload.firstID || cardObj.id === payload.secondID) {
          cardObj.isHidden = true;
        }
        return cardObj;
      });
    case types.TOGGLE_CARDS:
      return [...state].map(cardObj => ({ ...cardObj, isActive: false }));
    case types.TOGGLE_CARD:
      return [...state].map(cardObj => {
        if (cardObj.id === payload.id) {
          cardObj.isActive = payload.value;
        }
        return cardObj;
      });
    default:
      return state;
  }
};

export default cardsOnBoard;
