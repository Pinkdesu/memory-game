import * as types from "../constants";

export const addToRating = (
  playerName,
  { seconds, minutes, hours },
  timeValue
) => ({
  type: types.ADD_TO_RATING,
  payload: {
    playerName: playerName,
    time: {
      seconds,
      minutes,
      hours
    },
    value: timeValue,

    [Symbol.toPrimitive](hint) {
      return hint === "string"
        ? this.value
        : 3600 * this.time.hours + 60 * this.time.minutes + this.time.seconds;
    }
  }
});
