//Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.

let string = 'Строка'

if(string.length > 1) {
    console.log(string[string.length - 2])
}