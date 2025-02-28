//Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.

let word = 'Автомобиль';

if(word[word.length - 1] == 'ь') {
    console.log(word[word.length -2])
} else console.log(word[word.length -2])