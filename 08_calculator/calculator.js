const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
	return array.reduce((acc, n) => acc + n ,0)
};

const multiply = function(array) {
	return array.reduce((acc, n) => acc * n , 1)
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(n) {
	if (n === 0) return 1

  let result =  n
  for (let i = n - 1; i > 1; i--) {
    result *= i
  }
  return result
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
