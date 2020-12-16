'use strict';

const train = document.querySelector('.train'),
      startBtn = document.querySelector('#start'),
      stopBtn = document.querySelector('#stop'),
      resetBtn = document.querySelector('#reset');

let count = 0,
    idFrame;

const trainMove = function() {
  startBtn.disabled = true;
  count += 8;
  if ((train.style.left).replace('px', '') < 1600) {
    train.style.left = count + 'px';
    idFrame = requestAnimationFrame(trainMove);
  } else {
    train.style.left = 0 + 'px';
    count = 0;
    idFrame = requestAnimationFrame(trainMove)
  }
};

const trainStop = function() {
  
  if (startBtn.disabled === true) {
    cancelAnimationFrame(idFrame);
    startBtn.disabled = false;
  }
    
};

const resetAnimation = function() {
  count = 0;
  train.style.left = 0 + 'px';
  cancelAnimationFrame(idFrame);
  startBtn.disabled = false;
};


startBtn.addEventListener('click', () => {
  let idFrame = requestAnimationFrame(trainMove);
});

stopBtn.addEventListener('click', trainStop);

resetBtn.addEventListener('click', resetAnimation);
