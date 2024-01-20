let selectedNumbers = [];
let secretNumber = getRandomNumber();
let attemptsCounter = 1;

function changeElementInHTML(tag, text) {
    let element = document.querySelector(tag);
    element.innerHTML = text;
}

function showInitialMessage() {
    changeElementInHTML('h1', 'The secret number game');
    changeElementInHTML('p', 'Choice a number between 1 and 10');
}

showInitialMessage();

function checkGuess() {
    let guessValue = document.querySelector('input').value;
    
    if (guessValue == secretNumber) {
        changeElementInHTML('h1', `Right in the bull's-eye!`);
        wordAttempts = attemptsCounter > 1 ? 'attempts' : 'attempt'
        attemptsMessage = `You discovered the secret number with ${attemptsCounter} ${wordAttempts}!`;
        changeElementInHTML('p', attemptsMessage);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (guessValue > secretNumber) {
            changeElementInHTML('p', `The secret number is lower`);
        } else {
            changeElementInHTML('p', `The secret number is higher`);
        }
        attemptsCounter++;
        inputCleaner();
    }
}

function getRandomNumber () {
    let randomNumber = parseInt(Math.random() * 10 + 1);
    if (selectedNumbers.includes(randomNumber)) {
        return getRandomNumber();
    } else {
        selectedNumbers.push(randomNumber);
        return randomNumber;
    }
}

function inputCleaner () {
    guessInput = document.querySelector('input');
    guessInput.value = '';
}

function restartGame () {
    secretNumber = getRandomNumber();
    inputCleaner();
    attemptsCounter = 1;
    showInitialMessage();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}