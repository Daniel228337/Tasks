//Даны два числа. Проверьте, что первые цифры этих чисел совпадают

let numberOne = 3025
let numberTwo = 3015

let strOne = String(numberOne)

let intOne = strOne[0]

let strTwo = String(numberTwo)

let intTwo = strTwo[0]

if(intOne == intTwo) {
    console.log('Числа равны')
} else  console.log('Числа неравны')