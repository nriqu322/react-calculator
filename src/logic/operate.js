import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result = 0;
  const valueOne = Big(numberOne);
  const valueTwo = Big(numberTwo);

  if (operation === '-') {
    result = valueOne.minus(valueTwo);
  }

  if (operation === '+') {
    result = valueOne.plus(valueTwo);
  }

  if (operation === 'x') {
    result = valueOne.times(valueTwo);
  }

  if (operation === '%') {
    result = valueOne.mod(valueTwo);
  }

  if (operation === '÷') {
    result = valueOne.div(valueTwo);
  }

  return result;
};

export default operate;
