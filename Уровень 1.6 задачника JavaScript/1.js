//Дан массив с числами. Найдите сумму квадратов элементов этого массива. 

let numbers = [3, 5, 1, 0, 5, 9, 4] 
let result = 0

for(i = 0; i < numbers.length; i++) {
    result += (numbers[i] * numbers[i])
}

console.log(result)