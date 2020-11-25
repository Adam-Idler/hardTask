'use strict';

let string = prompt('Какую строку введешь?', '')

const stringConversion = function(str) {
    if (!Number.isNaN(Number(str))) return 'Вы ввели не строку!';
    str = str.split(' ').join('');
    if (str.length > 30) str = str.substr(0, 30) + '...';;
    return str;
};

console.log(stringConversion(string));