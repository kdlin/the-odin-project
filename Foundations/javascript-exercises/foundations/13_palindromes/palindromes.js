const palindromes = function (str) {
    let left = 0;
    let right = str.length - 1;

    let str = str
    .filter(char => /[a-z0-9]/i.test(char))
    .join('')
    .toLowerCase();


    // two pointer approach 
    while (right > left) { 
        if (str[left] !== str[right]) {
            return false;
        }

        left ++;
        right --;
    }
    
    return true;
};

// Do not edit below this line
module.exports = palindromes;
