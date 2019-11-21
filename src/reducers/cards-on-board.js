import * as types from "../constants";

const initialState = {};

const cardsOnBoard = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.INIT_GAME:
      return payload;
    default:
      return state;
  }
};

export default cardsOnBoard;
