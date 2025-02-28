//Найдите сумму всех целых четных чисел в промежутке от 1 до 100.
let sum = 0
for(let i = 0; i< 101; i+=2) {
    if(i == 0) continue
    sum += i
}

console.log(sum)