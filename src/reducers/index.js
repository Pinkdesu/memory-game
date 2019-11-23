import { combineReducers } from "redux";
import cardsOnBoard from "./cards-on-board";
import activeCards from "./active-cards";
import session from "./session";
import ratingList from "./rating-list";

const rootReducer = combineReducers({
  cardsOnBoard,
  activeCards,
  session,
  ratingList
});

export default rootReducer;
