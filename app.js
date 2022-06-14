const cards = document.querySelectorAll('.card');

function flipCard(event) {
    let clickedCard = event.target;
    clickedCard.classList.add('flip');
}

cards.forEach(card => {
    card.addEventListener('click', flipCard);
});