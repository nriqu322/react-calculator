import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result = 0;
  const valueOne = Big(numberOne || '0');
  const valueTwo = Big(numberTwo || '0');

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
    if (valueTwo === '0') {
      result = 'error';
    } else {
      result = valueOne.div(valueTwo);
    }
  }

  return result.toString();
};

export default operate;
