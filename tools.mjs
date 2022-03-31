import * as cards from 'cards.js';
let string = '';
let playerCards = [];
let CPUCards = [];
function randomDraw(){
for(let i =0; i < 7; i++){
let randomDraw = Math.floor(Math.random() * cards.length);
CPUCards.push(cards[randomDraw]);
playerCards.push(cards[randomDraw+1]);
}
console.log(CPUCards); // [undefined, undefined, undefined, ...];
  return CPUCards;
}
function showCards(){
let listOfPlayerCards = randomDraw();
listOfPlayerCards.forEach(function(element){
string += element.name += '\n';
});
console.log('You have the following cards: ' + string);
}
showCards();
