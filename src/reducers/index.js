import { combineReducers } from "redux";
import cardsOnBoard from "./cards-on-board";
import activeCard from "./active-card";

const rootReducer = combineReducers({ cardsOnBoard, activeCard });

export default rootReducer;
