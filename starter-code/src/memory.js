
class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.moves = 0;
    this.pairsGuessed = 0;
    this.pickedCards = [];
    this.cards = this.shuffleCards(cards);
    this.wrong = 0; 
  }
  shuffleCards() {
    console.log("starting to shuffle cards", this.cards)

  let copy = this.cards
  let tempCard;
  let indexCard;

  for (let i = copy.length - 1; i > 0; i--) {
    let randomCard = Math.floor(Math.random() * i); 
    tempCard = copy[randomCard];
    indexCard = copy[i];
    copy[i] = tempCard;
    copy[randomCard] = indexCard
    
  }

  console.log("done shuffling cards ------- ", copy);
  return copy;
  }
  checkIfPair(cards1, cards2) {
    for (let counter = 18; counter <= moves; counter--)
      console.log('checkpair',this.pickedCards,cards1, cards2)
      if (cards1 === cards2){
        this.pairsGuessed++;
        let ding = new Audio("../audio/ding.mp3")
        ding.play();
      } else{
        this.wrong++;
        let wrongSound = new Audio("../audio/wrongsound.mp3")
        wrongSound.play();
      }
      return cards1 === cards2;
  }
  isFinished() {
    return this.pairsGuessed === 8;
  }
}


// MemoryGame.prototype.shuffleCards = function(cards){
//   console.log("starting to shuffle cards", cards)

//   let copy = cards
//   let shuffledDeck = [];
//   let tempCard;
//   let indexCard;

//   for (let i = copy.length; i > 0; index--) {
//     let randomCard = Math.floor(Math.random() * i); 
//     tempCard = copy[randomCard];
//     indexCard = copy[i];

//     copy[i] = tempCard;
//     copy[randomCard] = indexCard
    
//   }

//   console.log("done shuffling cards ------- ", copy);
//   return copy;


//   // for(i = 0; i < copy.length; i++){
//   //   let randomCard = Math.floor(Math.random() * cardArray.length); 
//   //   let index = copy.indexOf(copy[i])
//   //   shuffledDeck.push(copy[randomCard])
//   //     // find the index of the randomCard pulled using indexof
//   //     // remove (splice) the card from the copy array
//   // }


// }
