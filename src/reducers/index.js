import { combineReducers } from "redux";
import cardsOnBoard from "./cards-on-board";
import activeCards from "./active-cards";

const rootReducer = combineReducers({ cardsOnBoard, activeCards });

export default rootReducer;
