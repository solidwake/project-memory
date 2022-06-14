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
        return console.log('Cards match');
    }
    setTimeout(() => {
        //Add shake class to both cards after 400ms
        cardOne.classList.add('shake');
        cardTwo.classList.add('shake');
    }, 400)

    setTimeout(() => {
        //Add shake class to both cards after 400ms
        cardOne.classList.remove('shake', 'flip');
        cardTwo.classList.remove('shake', 'flip');
    }, 1200)
}

cards.forEach(card => { //Add click event to all cards
    card.addEventListener('click', flipCard);
});