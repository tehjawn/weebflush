var cards = [
  "Take a sip for every loli character in the last episode of anime you watched.",
  "Name an anime. Choose a person. If that person can name a main character, take a sip. If they can't, they take a sip.",
  "Anyone named Chet takes 2 sips.",
  "Everyone must attempt to imitate Pikachu saying 'Pika pika'. Vote on who had the worst impression. That person takes a sip.",
  "wtf"
]

function cycleCard() {
  var cardContent = document.getElementById('cardContent')
  var randomCardIndex = Math.floor(Math.random()*cards.length)
  var randomCard = cards.splice(randomCardIndex, 1)
  if (randomCard == '') randomCard = 'No more cards left!'
  cardContent.innerHTML = randomCard
}
