const sumAll = function(a,b) {
  if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
    return "ERROR";
  } 

  [a, b] = [Math.min(a,b), Math.max(a,b)]
  let sum = 0 

  for (let num = a; num <= b; num++) {
    sum += num
  }  

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
