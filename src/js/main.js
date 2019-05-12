
let cards = CARDS;

function cycleCard() {
  const cardContent = document.getElementById('cardContent');
  const randomCardIndex = Math.floor(Math.random()*cards.length);
  const randomCard = cards.splice(randomCardIndex, 1)[0];
  // const randomCardText = `${randomCard.condition}, ${randomCard.cost}` ;
  const randomCardText = `${randomCard.text}` ;

  if (cards.length > 0){
    responsiveVoice.speak(randomCardText);    
    cardContent.innerHTML = randomCardText;
  }
  else{
    playSound('finish game'); 
    cardContent.innerHTML =  'No more cards left!<hr>Contribute more here: <a href="https://github.com/tehjawn/weebflush">Github</a>'; 
  }
}


