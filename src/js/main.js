
const cardContent = document.getElementById('cardContent');
const cardContainer = document.getElementsByClassName('card')[0];
const swipeThreshold = 100;

function cycleCard() {
  const randomCardIndex = Math.floor(Math.random()*cards.length);
  const randomCard = cards.splice(randomCardIndex, 1)[0];
  cardContent.innerHTML = (cards.length > 0) ? `${randomCard.condition}, ${randomCard.cost}` : 'No more cards left!<hr>Contribute more here: <a href="https://github.com/tehjawn/weebflush">Github</a>'; 
}

function swipeDetection(){
  let { originTouchX, endTouchX } = 0;
  
  cardContainer.addEventListener('touchstart', (ev)=>{
    originTouchX = ev.changedTouches[0].screenX;
  });

  cardContainer.addEventListener('touchend', (ev)=>{
    endTouchX = ev.changedTouches[0].screenX;
    const touchResult = endTouchX - originTouchX;

    if(touchResult > swipeThreshold){
      cycleCard();
    }
  });
}

swipeDetection();