const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a- b;
};

const sum = function(arr) {
  return arr.reduce((total, curr) => total + curr, 0)
}

const multiply = function(nums) {
  return nums.reduce((prod, curr) => prod * curr , 1);
}

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(n) {
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }  
  return product; 
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
