import operate from './operate';

const calculate = (dataObj, btnName) => {
  const { total, next, operation } = dataObj;

  const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const oper = ['+', '-', 'x', '÷', '%'];

  if (oper.includes(btnName) && next && total) {
    return {
      total: operate(total, next, operation).toString(),
      operation: btnName,
      next,
    };
  }

  if (oper.includes(btnName) && !next && total) {
    return {
      total,
      operation: btnName,
      next,
    };
  }

  if (oper.includes(btnName) && next && !total) {
    return {
      total: next,
      operation: btnName,
      next: null,
    };
  }

  if (nums.includes(btnName)) {
    return {
      total,
      next: next ? `${next}${btnName}` : `${btnName}`,
      operation,
    };
  }

  if (btnName === '+/-') {
    return {
      total: total * -1,
      next: next * -1,
    };
  }

  if (btnName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (btnName === '=') {
    return {
      total: operate(total, next, operation),
      next: null,
      operation: null,
    };
  }

  if (btnName === '.') {
    if (!next) {
      return {
        total,
        next: '0.',
        operation,
      };
    }
    if (next && !next.includes('.')) {
      return {
        total,
        next: `${next}.`,
        operation,
      };
    }
  }

  return [total, next, operation];
};

export default calculate;
