import operate from './operate';

const calculate = (dataObj, btnName) => {
  let { total, next, operation } = dataObj;

  const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const oper = ['+', '-', 'x', '÷', '%'];

  if (oper.includes(btnName)) {
    total = operate(total, next, operation);
  }

  if (nums.includes(btnName) || btnName === '.') {
    total = next;
  }

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
