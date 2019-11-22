import * as types from "../constants";

const initialState = { time: 0, points: 0 };

const session = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_POINT:
      let newState = { ...state };
      newState.points = newState.points + 1;
      return newState;
    case types.SET_TO_ZERO:
      return initialState;
    default:
      return state;
  }
};

export default session;
