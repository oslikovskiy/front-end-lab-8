export default function (a, b, action) {
  let result = 0;
  
  if (isNaN(a) || isNaN(b)) {
    result = 'Please enter a number';
    return result;
  } else if (action === '+') {
    result = parseFloat(a) + parseFloat(b);
    return result;
  } else if (action === '-') {
    result = parseFloat(a) - parseFloat(b);
    return result;
  } else if (action === '*') {
    result = parseFloat(a) * parseFloat(b);
    return result;
  } else if (action === '/') {
    result = parseFloat(a) / parseFloat(b);
    return result;
  }
};