
function cycleCard() {
  const cardContent = document.getElementById('cardContent');
  const randomCardIndex = Math.floor(Math.random()*cards.length);
  const randomCard = cards.splice(randomCardIndex, 1)[0];
  const randomCardText = `${randomCard.condition}, ${randomCard.cost}` ;

  if (cards.length > 0){
    responsiveVoice.speak(randomCardText);    
    cardContent.innerHTML = randomCardText;
  }
  else{
    responsiveVoice.speak("Congratulation you trash weebs");    
    cardContent.innerHTML =  'No more cards left!<hr>Contribute more here: <a href="https://github.com/tehjawn/weebflush">Github</a>'; 
  }
}