// Criar uma função que exibe "Olá, mundo!" no console.
function sayHi () {
    console.log('Hello World');
}

sayHi();

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function sayTheName (name) {
    console.log(`Hello ${name}!`);
}

sayTheName('João');

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function doubleNumber (number) {
    return console.log(number * 2);
}

doubleNumber(5);

// Criar uma função que recebe três números como parâmetros e retorna a média deles.
function averageNumbers (num1, num2, num3) {
    let average = (num1 + num2 + num3) / 3;
    return console.log(average);
}

averageNumbers(1, 2, 3);

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function higherNumber (num1, num2) {
    hight = num1 > num2 ? num1 : num2;
    return console.log(hight);
}

higherNumber(4, 7);
// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function multiplyNumber (number) {
    return console.log(number * number);
}

multiplyNumber(4);