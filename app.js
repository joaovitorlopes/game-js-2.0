let secretNumber = getRandomNumber();

function changeElementInHTML(tag, text) {
    let element = document.querySelector(tag);
    element.innerHTML = text;
}

changeElementInHTML('h1', 'The secret number game');
changeElementInHTML('p', 'Choice a number between 1 and 10');

function checkGuess() {
    let guessInput = document.querySelector('input').value;
    
    if (guessInput == secretNumber) {
        changeElementInHTML('h1', `Right in the bull's-eye!`);
        changeElementInHTML('p', `You discovered the secret number!`);
    } else {
        if (guessInput > secretNumber) {
            changeElementInHTML('p', `The secret number is lower`);
        } else {
            changeElementInHTML('p', `The secret number is higher`);
        }
    }
}

function getRandomNumber() {
    return parseInt(Math.random() * 10 + 1)
}