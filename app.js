let secretNumber = getRandomNumber();
let attemptsCounter = 1;

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
        wordAttempts = attemptsCounter > 1 ? 'attempts' : 'attempt'
        attemptsMessage = `You discovered the secret number with ${attemptsCounter} ${wordAttempts}!`;
        changeElementInHTML('p', attemptsMessage);
    } else {
        if (guessInput > secretNumber) {
            changeElementInHTML('p', `The secret number is lower`);
        } else {
            changeElementInHTML('p', `The secret number is higher`);
        }
        attemptsCounter++;
    }
}

function getRandomNumber() {
    return parseInt(Math.random() * 10 + 1)
}