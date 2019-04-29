function swipeDetection(){
    const cardContainer = document.getElementsByClassName('card')[0];
    const swipeThreshold = 100;
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