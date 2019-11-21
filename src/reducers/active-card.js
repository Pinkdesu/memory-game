import * as types from "../constants";

const initialState = { isEmpty: true, data: {} };

const activeCard = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_CARD:
      return {
        isEmpty: false,
        data: payload
      };
    case types.REMOVE_CARD:
      return initialState;
    default:
      return state;
  }
};

export default activeCard;
