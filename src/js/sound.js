
const clickLogoThreshold = 3;
let clickLogoCounter = 0;

function playSound(action){
    console.log('sound')
    switch(action){
      case 'click logo':
        logoClickSoundTrigger();
        break;
      default:
        return;
    }
}
  
  function logoClickSoundTrigger(){
    if(clickLogoCounter >= clickLogoThreshold){
        clickLogoCounter = 0;
        loadAndPlayAudio(AUDIO.fbi);  
    }
    else{
        clickLogoCounter++;
        loadAndPlayAudio(AUDIO.poi);          
    }
}

function loadAndPlayAudio(audio){
    const loadedAudio = new Audio(audio);
    loadedAudio.play();
}