import { Card } from "./card.mjs";

export class Deck {
  // this is called whenever "new Deck" is called
  constructor() {
    this.cards = shuffle(freshDeck());
  }

  // this returns two variables, playerCards and cpuCards
  deal() {
    let playerCards = [];
    let cpuCards = [];
    for (const i of Array.from(Array(6).keys())) {
      // "pop" removes the last element from an array
      // which is the same as the top of the deck
      // and push puts it in the correct hand
      playerCards.push(this.cards.pop());
      cpuCards.push(this.cards.pop());
    }
    return { playerCards, cpuCards };
  }
}

const freshDeck = () => {
  // first, declare an empty list
  // we will do a few things to populate this list
  let deck = [];

  // each uno deck contains four main colors
  const possibleColors = ["Red", "Green", "Bue", "Yellow"];

  // each uno deck contains cards from 0 to 9 (for a total of 10)
  const possibleNumbers = Array.from(Array(10).keys());

  // each uno deck contains three types of action cards
  const possibleActions = ["Skip", "Reverse", "Draw 2"];

  // and of course, there are wild cards
  const possibleWildCards = ["Draw 4", "Wild"];

  // first, iterate through all of the colors
  for (const possibleColor of possibleColors) {
    // for each color, create the right amount of cards for each number
    for (const possibleNumber of possibleNumbers) {
      // create an instance of the Card class that describes the
      // current state of our nested for loop
      let newCard = new Card(possibleColor, possibleNumber);
      if (possibleNumber === 0) {
        // in a standard uno deck, there is one "zero" card per color
        deck.push(newCard);
      } else {
        // and two of every other number
        deck.push(newCard);
        deck.push(newCard);
      }
    }

    // after creating all of our standard numbers
    // create our action cards for each possible color
    for (const possibleAction of possibleActions) {
      let newCard = new Card(possibleColor, possibleAction);
      // each color has two of each type of action card
      deck.push(newCard);
      deck.push(newCard);
    }
  }

  // finally, add the wild cards
  for (const possibleWildCard of possibleWildCards) {
    let newCard = new Card("Black Rainbow", possibleWildCard);
    // there are four of each type of wild card
    deck.push(newCard);
    deck.push(newCard);
    deck.push(newCard);
    deck.push(newCard);
  }

  return deck;
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};
