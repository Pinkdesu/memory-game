import { INIT_GAME } from "../constants";

export const initGame = cards => {
  // const formattedCards = cards.reduce((acc, current) => {
  //   return { ...acc, [current.id]: current };
  // }, {});
  return {
    type: INIT_GAME,
    payload: cards
  };
};
