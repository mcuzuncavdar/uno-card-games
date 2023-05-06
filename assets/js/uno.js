const cardColors = ['green', 'red', 'blue', 'yellow'];
const cardNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

let allCards = [];
let playerOne = [];
let playerTwo = [];

function createCards() {  
  cardColors.forEach(color => {
    cardNumbers.forEach(number => {
      const card = { color, number };
      allCards.push(card);
    });
  });
  return allCards;
}

createCards()

//Fisher-Yates shuffle algorithm
function shuffleAllCards() {
  for(let i = allCards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

  [allCards[i], allCards[j]] = [allCards[j], allCards[i]] 
  }
}

shuffleAllCards()

function cardDistribute() {
  for(let i = 0; i < 7; i++) {
    playerOne.push(allCards.shift())
    playerTwo.push(allCards.shift())
  }
}
cardDistribute()

