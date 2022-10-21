export default function () {
  // элементы управления первого счетчика
  const arrowMinusOne = document.querySelector('.arrow-minus-one');
  const arrowPlusOne = document.querySelector('.arrow-plus-one');
  const numberFieldOne = document.querySelector('.number-field-one');
  // элементы управления второго счетчика
  const arrowMinusTwo = document.querySelector('.arrow-minus-two');
  const arrowPlusTwo = document.querySelector('.arrow-plus-two');
  const numberFieldTwo = document.querySelector('.number-field-two');
  // элементы управления третьего счетчика
  const arrowMinusThree = document.querySelector('.arrow-minus-three');
  const arrowPlusThree= document.querySelector('.arrow-plus-three');
  const numberFieldThree = document.querySelector('.number-field-three');

  // функционал счетчика
  const inputNumberFunction = (arrowMinus, arrowPlus, numberField) => { 
    const arrowMinusFn = arrowMinus;
    const arrowPlusFn = arrowPlus;
    const numberFieldFn = numberField;

    const increment = () => {
      numberFieldFn.value++
    }

    const decrement = () => {
      if (numberFieldFn.value > 1) {
        numberFieldFn.value--
      }
    }

    arrowMinusFn.addEventListener('click', decrement);
    arrowPlusFn.addEventListener('click', increment);
  }

  // вызовы счетчиков
  inputNumberFunction(arrowMinusOne, arrowPlusOne, numberFieldOne);
  inputNumberFunction(arrowMinusTwo, arrowPlusTwo, numberFieldTwo);
  inputNumberFunction(arrowMinusThree, arrowPlusThree, numberFieldThree);

};

