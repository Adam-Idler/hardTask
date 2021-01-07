class Calculator {
  constructor(price) {
    this.price = price;
  }
  calc() {
    const calcBlock = document.querySelector('.calc-block'),
          calcType = document.querySelector('.calc-type'),
          calcSquare = document.querySelector('.calc-square'),
          calcDay = document.querySelector('.calc-day'),
          calcCount = document.querySelector('.calc-count'),
          totalValue = document.getElementById('total');
    
    const countSum = () => {
      
      let total = 0,
          countValue = 1,
          dayValue = 1;
      const typeValue = calcType.options[calcType.selectedIndex].value,
            squareValue = +calcSquare.value;
      
      if (calcCount.value > 1) {
        countValue += (calcCount.value - 1) / 10;
      }
      if (calcDay.value && calcDay.value < 5) {
        dayValue *= 2;
      } else if (calcDay.value && calcDay.value < 10) {
        dayValue *= 1.5;
      }
      if (typeValue && squareValue) {
        total = Math.ceil(this.price * typeValue * squareValue * countValue * dayValue);
      }
      
      let count = +totalValue.textContent;
      let setID;
      // Animation 
      if (total === 0) {
        totalValue.textContent = 0;
        cancelAnimationFrame(setID);
      } else if (count < total) {
        count += Math.floor(total / 25);
        totalValue.textContent = count;
      } else if (count > total) {
        count -= Math.floor(count / 10);
        totalValue.textContent = count;
      }
      
      if (total - totalValue.textContent < total / 10 && total - totalValue.textContent > 0) {
        totalValue.textContent = total;
        cancelAnimationFrame(setID);
      }
      
      setID = requestAnimationFrame(countSum);
      if (count === total) cancelAnimationFrame(setID);       
    };

    calcBlock.addEventListener('change', (event) => {
      const target = event.target;

      if (target.matches('select') || target.matches('input')) {
        countSum();
      }
    });
  }
}

export default Calculator;