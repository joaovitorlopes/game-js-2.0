// Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let title = document.querySelector('h1');
title.innerHTML = 'Hora do Desafio';

// Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function consoleButton () {
    console.log('The button has been clicked');
}

// Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function alertButton () {
    alert('I love JS');
}

// Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function promptButton() {
    let city = prompt('Tell me the name of one city of Brazil');
    alert(`I was in ${city}, and I remembered you`);
}

// Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.
function sumButton() {
    let number1 = parseInt(prompt('Choice one number:'));
    let number2 = parseInt(prompt('Choice another number:'));
    let sum = number1 + number2;
    alert(`The result of adding ${number1} + ${number2} = ${sum}`);
}