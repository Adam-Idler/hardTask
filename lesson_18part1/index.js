'use strict';

const mirror = document.querySelector('.mirror'),
      input = document.querySelector('input');

function getText() {
  mirror.textContent = input.value;
  
}

function throttle(func, ms) {
  var cooldown = null;
  return function () {
      if (cooldown == null) {
        cooldown = setTimeout(function () {
            func();
            clearInterval(cooldown);
            cooldown = null;
          }, ms);
      }
  };
}

input.addEventListener('input', throttle(getText, 300));