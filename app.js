const cards = document.querySelectorAll('.card');

let cardOne, cardTwo;

function flipCard(event) {
    let clickedCard = event.target; //Get the card the user clicked
    if(clickedCard !== cardOne) {
        clickedCard.classList.add('flip');
        if(!cardOne) {
            //Return the cardOne value to clickedCard
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;

        let cardOneImg = cardOne.querySelector('img').src,
        cardTwoImg = cardTwo.querySelector('img').src;
        matchCards(cardOneImg, cardTwoImg);
    }
}

function matchCards(img1, img2) {
    if(img1 === img2) {
        cardOne.removeEventListener('click', flipCard);
        cardTwo.removeEventListener('click', flipCard);
        cardOne = cardTwo = '';
        return;
    }
    setTimeout(() => {
        //Add shake class to both cards after 400ms
        cardOne.classList.add('shake');
        cardTwo.classList.add('shake');
    }, 400);

    setTimeout(() => {
        //Remove shake class from both cards after 1.2s
        cardOne.classList.remove('shake', 'flip');
        cardTwo.classList.remove('shake', 'flip');
        cardOne = cardTwo = ''; //Return card values to blank
    }, 1200);
}

cards.forEach(card => { //Add click event to all cards
    card.addEventListener('click', flipCard);
});