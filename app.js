function changeElementInHTML(tag, text) {
    let element = document.querySelector(tag);
    element.innerHTML = text;
}

changeElementInHTML('h1', 'The secret number game');
changeElementInHTML('p', 'Choice a number between 1 and 10');


function checkGuess() {
    console.log('The button has been clicked');
}
