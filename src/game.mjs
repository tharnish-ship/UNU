import { Deck } from "./deck.mjs";

export const play = () => {
  let deck = new Deck();
  let { playerCards, cpuCards } = deck.deal();
  console.log("--- PLAYER CARDS ---\n");
  console.log(playerCards, "\n");
  console.log("----- CPU CARDS -----\n");
  console.log(cpuCards);
};
