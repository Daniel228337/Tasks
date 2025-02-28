//Дано число. Выведите в консоль сумму первой и последней цифры этого числа.

let number = 2025

let numberStr = String(number)

let numberStart = numberStr[0]

let numberEnd = numberStr[numberStr.length - 1]

let numberResult = parseInt(numberStart) + parseInt(numberEnd)

console.log(numberResult)