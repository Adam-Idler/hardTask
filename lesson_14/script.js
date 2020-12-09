'use strict';

let body = document.querySelector('body'),
    newDiv;

function DomElement() {
    this.selector = '.test';
    this.height = 100;
    this.width = 100;
    this.bg = 'red';
}

DomElement.prototype.createBlock = function(text) {
    newDiv = document.createElement('div');
    body.appendChild(newDiv);
    newDiv.style.cssText = `height: ${this.height}px;
                          width: ${this.width}px;
                          background: ${this.bg};
                          font-size: ${this.fontSize}px;
                          position: absolute;
                          `;
};

const newSelector = new DomElement();

document.addEventListener("DOMContentLoaded", newSelector.createBlock());
document.addEventListener("keydown", function(key) {
    let posY = newDiv.offsetTop,
        posX = newDiv.offsetLeft;
    switch (key.key) {
        case 'ArrowLeft':
            posX -= 10;
            newDiv.style.left = posX + 'px';
            break;
        case 'ArrowRight':
            posX += 10;
            newDiv.style.left = posX + 'px';
            break;
        case 'ArrowUp':
            posY -= 10;
            newDiv.style.top = posY + 'px';
            break;
        case 'ArrowDown':
            posY += 10;
            newDiv.style.top = posY + 'px';
            break;
    }
});
