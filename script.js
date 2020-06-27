//GAME OF WAR
//code for creating deck
const cardFace = ["2","3","4","5","6","7","8","9","10","jack","queen","king","ace"];
const cardSuits = ["spades", "clubs", "diamonds", "hearts"];
const cardValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const deck = [];
const players = [[],[]];

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

console.log(deck)