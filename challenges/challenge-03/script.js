// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function imc(height, weight) {
    let result = weight / (height ** 2);
    return result.toFixed(2);
}

console.log(imc(1.80, 76));

// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function factorialValue(number) {
    if (number === 0 || number === 1) {
        return console.log(`The factorial of ${number} is ${1}`);
    }

    let factorial = 1;
    for (let i = 2; i <= number; i++) {
        factorial *= i;
    }

    return console.log(`The factorial of ${number} is ${factorial}`);
}

factorialValue(5);

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function dollarConversion(value) {
    cota
    conversion = value * 4.80;
    return console.log(`${value} dollar is equals ${conversion.toFixed(2)} brazilian real`);
}

dollarConversion(10);

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

function rectangleAreaAndPerimeter (width, height) {
    let area = width * height;
    let perimeter = 2 * (width + height);
    return console.log(`The area is ${area.toFixed(2)} and perimeter is ${perimeter.toFixed(2)}`);
}

rectangleAreaAndPerimeter(11, 7);

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function circleAreaAndPerimeter (radius) {
    const pi = 3.14;
    let area = pi * (radius ** 2);
    perimeter = 2 * pi * radius;
    return console.log(`The area is ${area.toFixed(2)} and perimeter is ${perimeter.toFixed(2)}`);
}

circleAreaAndPerimeter(8);

function multiplicationTable (number) {
    for (let i = 0; i <= 10; i++) {
        console.log(`${number} * ${i} = ${number * i}`);
    }
}

multiplicationTable(8);