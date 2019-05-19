let cards = CARDS;

function cycleCard() {
  const cardsToDraw = Math.min(3, cards.length);
  const randomCardIndex = Math.floor(Math.random() * cards.length);

  var cardsHtml = '';
  if (cardsToDraw > 0) {
    for (var i = 0; i < cardsToDraw; i++) {
      const randomCardData = cards.splice(randomCardIndex, 1)[0];
      cardsHtml += `
        <div class="card-ctn">
          <div class="card">
            <span>
              ${randomCardData.text}
            </span>
          </div>
        </div>
        `
    }
  } else {
    cardsHtml = `
    <div class="card-ctn">
      <div class="card">
        <span>
          No more cards left!<hr>Contribute more here: <a href="https://github.com/tehjawn/weebflush">Github</a>
        </span>
      </div>
    </div>
    `;
  }
  const cardContent = document.getElementById('cardContent');
  cardContent.innerHTML = cardsHtml;
  cardContent.scrollLeft = 0;
}