
function cycleCard() {
  var cardContent = document.getElementById('cardContent');
  var randomCardIndex = Math.floor(Math.random()*cards.length);
  var randomCard = cards.splice(randomCardIndex, 1)[0];
  cardContent.innerHTML = (cards.length > 0) ? `${randomCard.condition}, ${randomCard.cost}` : 'No more cards left!<hr>Contribute more here: <a href="https://github.com/tehjawn/weebflush">Github</a>'; 
}