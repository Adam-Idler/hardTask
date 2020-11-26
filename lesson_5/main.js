'use strict';

console.log('Задание 1');

let arr = [123, 765, 4890, 9789, 2077, 43105, 5890];

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    if ( arr[i].toString()[0] === '2' || arr[i].toString()[0] === '4' ) console.log(arr[i]);
}

console.log('Задание 2');

let n = 100;

for (let i = 2; i <= n; i++) {
    let count = 0;
    for (let j = 2; j < i; j++) {
        if (i % j != 0) 
            count++;
    }
    if (count == i - 2) 
        console.log(i);
}