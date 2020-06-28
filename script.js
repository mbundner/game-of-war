//GAME OF WAR
//1. define game variables
const cardFace = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "jack",
  "queen",
  "king",
  "ace",
];
const cardSuits = ["spades", "clubs", "diamonds", "hearts"];
const cardValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let deck = [];
let deck1 = [];
let player1deck = [];
let player2deck = [];
//2. Run function createDeck() to create deck
function createDeck(){
for (let i = 0; i < cardFace.length; i++) {
  for (let j = 0; j < cardSuits.length; j++) {
    let card = {
      face: cardFace[i],
      suit: cardSuits[j],
      value: cardValue[i],
    };
    deck.push(card);
  }
}
console.log(deck.length+" cards ready");
}
//3. Run function shuffleDeck() to shuffle deck
function shuffleDeck(){
for (let i = 0; i < deck.length; i++) {
  let randomIndex = Math.floor(Math.random() * 52);
  let x = deck[i];
  deck[i] = deck[randomIndex];
  deck[randomIndex] = x;
}
console.log(deck.length+" cards shuffled and ready to deal")
}
//4. Run function dealDeck() to deal deck to players
function dealDeck(){
for (i = 0; i < deck.length; i++) {
  if (i % 2 !== 0) {
    player1deck.push(deck[i]);
  } else {
    player2deck.push(deck[i]);
  }
}
console.log(player1deck.length+" cards for player 1");
console.log(player2deck.length+" cards for player 2");
}

//5. Run function playRound() each time you want to play a round
function playRound(){
  let card1 = player1deck.shift();
  let card2 = player2deck.shift();
  let pot = [card1, card2];
  console.log(card1);
  console.log(card2);
  
if (card1.value > card2.value){
   console.log("player 1 wins!");
   player1deck = player1deck.concat(pot);
}else if (card1.value < card2.value){
   console.log("player 2 wins!");
   player2deck = player2deck.concat(pot);
}else if (card1.value === card2.value){
  console.log("we have a war!")
}
console.log("player 1 now has "+player1deck.length+" cards");
console.log("player 2 now has "+player2deck.length+" cards");
}

//EVERYTHING UP TO HERE IS GOOD!!!
//NOW WORK ON BATTLE MODE!!!

//6. Run function fight() when the playRound() function is a tie
function fight() {
  for (let i = 0; i < 4; i++) {
    card1 = player1.shift();
    console.log(card1);
  }
  for (let j = 0; j < 4; j++) {
    card2 = player2.shift();
    console.log(card2);
  }
}
