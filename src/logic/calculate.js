import Big from './big.mjs';

const calculate = (dataObj, btnName) => {
  let { total, next, operation } = dataObj;

  if (btnName === '+/-') {
    total *= -1;
    next *= -1;
  } else if (btnName === 'AC') {
    total = 0;
    next = null;
    operation = null;
  } else {
    total = null;
    next = null;
    operation = null;
  }

  return (total, next, operation);
};

export default calculate;
