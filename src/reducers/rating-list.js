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
        return +obj1 - +obj2;
      });
    default:
      return state;
  }
};

export default ratingList;
