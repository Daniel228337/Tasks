//Дано число. Выведите в консоль последнюю цифру этого числа.

let number = 2025;

let numberstr = String(number);

let numberint = parseInt(numberstr[numberstr.length - 1]);

console.log(numberint);