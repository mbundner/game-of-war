//GAME OF WAR
//code for creating deck
const cardFace = ["2","3","4","5","6","7","8","9","10","jack","queen","king","ace"];
const cardSuits = ["spades", "clubs", "diamonds", "hearts"];
const cardValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const deck = [];
const player1 = [];
const player2 = [];

for (let i=0; i<cardFace.length; i++){
    for (let j=0; j<cardSuits.length; j++){
        let card = {
          face: cardFace[i],
          suit: cardSuits[j],
          value: cardValue[i]
        }
        deck.push(card)
    }
  }
//console.log(deck)

//code for shuffling deck
for (let i=0; i<deck.length; i++){
  let randomIndex = Math.floor(Math.random()*52)
  let x = deck[i];
  deck[i] = deck[randomIndex];
  deck[randomIndex] = x;
}

//console.log(deck)

//code for dealing the deck to 2 players
for (i=0; i<deck.length; i++){
  if (i%2 !== 0){
    player1.push(deck[i])
  }else{
    player2.push(deck[i])
  }
}
console.log(player1)
console.log(player2)

//CODE for the battlefield...function called play()

//round1

let card1 = player1.shift();
let card2 = player2.shift()
let playField = [card1, card2];
console.log(card1)
console.log(card2)
console.log(playField)

/*
if (card1.value === card2.value){
  console.log("we have a war")
}else if (card1.value > card2.value){
  console.log("player 1 wins round")
  player1.push(card1, card2)
}else{
  console.log("player 2 wins round")
  player1.push(card1, card2)
}
console.log(player1)
console.log(player2)
*/