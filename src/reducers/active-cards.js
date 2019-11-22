import * as types from "../constants";

const initialState = [];

const activeCards = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_CARD:
      return [...state, payload];
    case types.SET_TIMER:
      return [...state].map(cardObj => {
        if (cardObj.id === payload.id)
          return { ...cardObj, timerId: payload.timerId };
        return cardObj;
      });
    case types.REMOVE_CARD:
      return [...state].filter(cardObj => cardObj.id !== payload.id);
    case types.REMOVE_CARDS:
      return initialState;
    default:
      return state;
  }
};

export default activeCards;
