import * as types from "../constants";

const initialState = {
  playerName: "",
  value: "00:00:00",
  reset: () => {},
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
    case types.ADD_PLAYER_NAME:
      return { ...state, playerName: payload };
    case types.ADD_POINT:
      return { ...state, points: state.points + 1 };
    case types.SET_STOPWATCH_VALUE:
      return {
        ...state,
        value: payload
      };
    case types.CLEAR_SESSION:
      return { ...initialState, playerName: state.playerName };
    default:
      return state;
  }
};

export default session;
