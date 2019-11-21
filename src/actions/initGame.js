import { INIT_GAME } from "../constants";

export const initGame = cards => {
  cards.sort(() => 0.5 - Math.random());

  return {
    type: INIT_GAME,
    payload: cards
  };
};
