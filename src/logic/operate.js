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
    result = valueOne.times(Big(0.01));
  }

  if (operation === '÷') {
    try {
      result = valueOne.div(valueTwo);
    } catch (e) {
      result = 'ERROR';
    }
  }

  return result.toString();
};

export default operate;
