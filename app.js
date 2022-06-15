const cards = document.querySelectorAll('.card');

let matchedCard = 0;
let cardOne, cardTwo;
let disableDeck = false;

function flipCard(event) {
    let clickedCard = event.target; //Get the card the user clicked
    if(clickedCard !== cardOne && !disableDeck) {
        clickedCard.classList.add('flip');
        if(!cardOne) {
            //Return the cardOne value to clickedCard
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector('img').src,
        cardTwoImg = cardTwo.querySelector('img').src;
        matchCards(cardOneImg, cardTwoImg);
    }
}

function matchCards(img1, img2) {
    if(img1 === img2) {
        matchedCard++;
        if(matchedCard == 8) { //If matched card is equal to number of unique cards, shuffle cards and reset the game
            setTimeout(() => {
                return shuffleCards();
            }, 1000); //Call shuffleCards after 1 secons
        }
        cardOne.removeEventListener('click', flipCard);
        cardTwo.removeEventListener('click', flipCard);
        cardOne = cardTwo = '';
        return disableDeck = false;
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
        disableDeck = false;
    }, 1200);
}

function shuffleCards() {
    matchedCard = 0;
    cardOne = cardTwo = '';
    cards.forEach(card => {
        card.classList.remove('flip');
        card.addEventListener('click', flipCard);
    });
    disableDeck = false;
}

cards.forEach(card => { //Add click event to all cards
    card.addEventListener('click', flipCard);
});