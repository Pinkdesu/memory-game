import * as types from "../constants";

const initialState = {
  timerId: 0,
  value: "00:00:00",
  points: 0,
  isLaunched: false
};

const session = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.START_GAME:
      return {
        ...state,
        isLaunched: true
      };
    case types.FINISH_GAME:
      return {
        ...state,
        isLaunched: false
      };
    case types.ADD_POINT:
      return { ...state, points: state.points + 1 };
    case types.SET_TIME:
      return {
        ...state,
        value: payload.value
      };
    case types.CLEAR_SESSION:
      return initialState;
    default:
      return state;
  }
};

export default session;
