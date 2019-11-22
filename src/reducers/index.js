import { combineReducers } from "redux";
import cardsOnBoard from "./cards-on-board";
import activeCards from "./active-cards";
import session from "./session";

const rootReducer = combineReducers({ cardsOnBoard, activeCards, session });

export default rootReducer;
