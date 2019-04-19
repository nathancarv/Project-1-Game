var counter = 18

function xperi(){
var cards = [
  { name: 'binoculars',      img: '<i class="fas fa-binoculars"></i>' },
  { name: 'campground',      img: '<i class="fas fa-campground"></i>' },
  { name: 'fire',            img: '<i class="fas fa-fire"></i>' },
  { name: 'first-aid',       img: '<i class="fas fa-first-aid"></i>' },
  { name: 'hiking',          img: '<i class="fas fa-hiking"></i>' },
  { name: 'map',             img: '<i class="fas fa-map-marked"></i>' },
  { name: 'mountain',        img: '<i class="fas fa-mountain"></i>' },
  { name: 'tree',            img: '<i class="fas fa-tree"></i>' },
  { name: 'binoculars',      img: '<i class="fas fa-binoculars"></i>' },
  { name: 'campground',      img: '<i class="fas fa-campground"></i>' },
  { name: 'fire',            img: '<i class="fas fa-fire"></i>' },
  { name: 'first-aid',       img: '<i class="fas fa-first-aid"></i>' },
  { name: 'hiking',          img: '<i class="fas fa-hiking"></i>' },
  { name: 'map',             img: '<i class="fas fa-map-marked"></i>' },
  { name: 'mountain',        img: '<i class="fas fa-mountain"></i>' },
  { name: 'tree',            img: '<i class="fas fa-tree"></i>' },
];

var timesWon = 1; 
var memoryGame = new MemoryGame(cards);

  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name= '+ pic.name +'>'+ pic.img +'</div>';
    html += '  <div class="front"></div>'; /* style="background: url(img/'+ pic.img +') no-repeat"*/
    html += '</div>';
  });
  // Add all the div's to the HTML
  document.getElementById('memory_board').innerHTML += html;
  // Bind the click event of each element to a function
$('.back').on('click', function () { 
    let flippingNoise = new Audio("../audio/coin.mp3")
    flippingNoise.play();
    if (!this.classList.contains('active')) {
      memoryGame.pickedCards.push(this);
      console.log('hi')
      displayClickedCard(this);
      if(memoryGame.pickedCards.length > 1) {
        $('.front,.back').addClass('blocked');
        var cards1 = memoryGame.pickedCards[0].getAttribute("name");
        var cards2 = memoryGame.pickedCards[1].getAttribute("name");
        window.c = memoryGame.pickedCards[0] 
        console.log('here', cards1, cards2, '????')
        if(memoryGame.checkIfPair(cards1, cards2)) { //true if correct else false
          counter--
          if(counter < 1) {
            setTimeout(() => {
              $('.back').addClass('active')
              alert("Game over... Better luck next time... Champ");
              location.reload();
            },100)
          }
          console.log(counter)
          document.getElementById('moves').innerHTML = counter;

          prepareNextTurn(); //got it right
        } else {
          turnBackCards(); //got it wrong 
        }
        console.log(memoryGame) //whether its' right or wrong you have all ur data in here 
        //$('#pairs_clicked').html(memoryGame.pairsClicked)
      }
      printGameInfo();
      if (memoryGame.isFinished()) { 
        setTimeout(() =>{
          alert('Congratulations You Won with '+ counter +' Moves to Spare!!'); 
          //location.reload();
          timesWon++;
          for(let x=0; x<timesWon; x++){
            xperi()
            counter += 10 
          }
        }, 100)
        
      }
    }
});

  // Bind the click event of each element to a function
  function turnBackCards() {
 
    setTimeout(function () {
      //memoryGame.pickedCards[1].style.background = 'red';
      //memoryGame.pickedCards[0].style.background = '#456783';
      //memoryGame.pickedCards[1].style.background = '#456783';
      memoryGame.pickedCards[0].classList.add('wrong')
      memoryGame.pickedCards[1].classList.add('wrong')
      //$('#whteverid') .toggleClass() or .addClass() or .removeClass('active)
      memoryGame.pickedCards[0].classList.remove('active');
      memoryGame.pickedCards[1].classList.remove('active');

      counter--
      
      console.log(counter)
      document.getElementById('moves').innerHTML = counter;
      if(counter < 1) {
        setTimeout(() => {
          alert("Game over... Better luck next time... Champ");
          location.reload();
        },100)
      }
       else {
        setTimeout(function(){
  
          memoryGame.pickedCards[0].classList.remove('wrong')
          memoryGame.pickedCards[1].classList.remove('wrong')
          prepareNextTurn();
  
        },600)
      }

    }, 600);
  }
  
  function prepareNextTurn() {
    memoryGame.pickedCards = [];
    $('.front,.back').removeClass('blocked');
  }
  
  function printGameInfo() {
    document.getElementById('moves').innerHTML = counter;
    document.getElementById('pairs_guessed').innerHTML = memoryGame.pairsGuessed;
  }

  
  function displayClickedCard(cards) {
    console.log(cards)
    cards.className += ' active';
    // cards.style.background = 'url(img/' + cards.getAttribute('name') + ') no-repeat';
  }

}
xperi()