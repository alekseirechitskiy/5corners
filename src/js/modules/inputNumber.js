export default function () {
  const arrowMinus = document.querySelector('.input-number__arrow-minus');
  const arrowPlus = document.querySelector('.input-number__arrow-plus');
  const numberField = document.querySelector('.input-number__number-field');

  const increment = () => {
    numberField.value++
  }

  const decrement = () => {  
    if (numberField.value > 1) {
      numberField.value--
    }
  }

  arrowMinus.addEventListener('click', decrement);
  arrowPlus.addEventListener('click', increment);
};

