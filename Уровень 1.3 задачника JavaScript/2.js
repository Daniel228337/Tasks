//Даны два целых числа. Проверьте, что первое число без остатка делится на второе. 

let numberOne = 13
let numberTwo = 2

if(numberOne % numberTwo == 0) {
    console.log('Делиться без остатка')
} else console.log(`Остаток ${numberOne % numberTwo}`)