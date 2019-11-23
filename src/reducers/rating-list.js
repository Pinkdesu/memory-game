import * as types from "../constants";
import { load } from "redux-localstorage-simple";

let initialState = load({ namespace: "rating-list" });
if (!initialState || !initialState.length) {
  initialState = [];
}

const ratingList = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD_TO_RATING:
      return [...state, payload].sort((obj1, obj2) => {
        return obj1.time.hours === obj2.time.hours
          ? obj1.time.minutes === obj2.time.minutes
            ? obj1.time.seconds === obj2.time.seconds
              ? 0
              : obj1.time.seconds > obj2.time.seconds
              ? 1
              : -1
            : obj1.time.minutes > obj2.time.minutes
            ? 1
            : -1
          : obj1.time.hours > obj2.time.hours
          ? 1
          : -1;
      });
    default:
      return state;
  }
};

export default ratingList;
