let secretNumber = getRandomNumber();

function changeElementInHTML(tag, text) {
    let element = document.querySelector(tag);
    element.innerHTML = text;
}

changeElementInHTML('h1', 'The secret number game');
changeElementInHTML('p', 'Choice a number between 1 and 10');

function checkGuess() {
    console.log(secretNumber);
}

function getRandomNumber() {
    return parseInt(Math.random() * 10 + 1)
}