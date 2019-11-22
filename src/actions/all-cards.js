import { TOGGLE_CARD, TOGGLE_CARDS } from "../constants";

export const toggleCard = (id, value) => {
  return {
    type: TOGGLE_CARD,
    payload: {
      id: id,
      value: value
    }
  };
};

export const toggleCards = () => {
  return {
    type: TOGGLE_CARDS
  };
};
