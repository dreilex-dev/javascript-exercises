const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};


const sum = function (array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function (array) {
  return array.reduce((accumulator, currentValue) => accumulator * currentValue);
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(num) {
  if (num === 0) return 1;
  const array = Array.from({ length: num }, (v, k) => k + 1);
  return array.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
