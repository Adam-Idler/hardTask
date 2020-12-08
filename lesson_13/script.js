'use strict';

let change = document.querySelector('#change'),
    color = document.querySelector('#color'),
    body = document.querySelector('body');

function getRandomColor() {
    let r = Math.floor(Math.random() * 256),
        g = Math.floor(Math.random() * 256),
        b = Math.floor(Math.random() * 256);
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}

change.addEventListener('click', function() {
    let randomColor = getRandomColor();
    body.style.background = randomColor;
    change.style.color = randomColor;
    color.textContent = randomColor;
;})