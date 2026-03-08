const fibonacci = function(num) {
    num = Number(num);
    if (num === 0) return 0;
    if (num < 0) return "OOPS";

    let count = 0;
    let prev = 0;
    let fibo = 1;
    while (count < num - 1) {
         [prev, fibo] = [fibo, fibo + prev]
         count ++;
    }
    return fibo; 
};

// Do not edit below this line
module.exports = fibonacci;
