const palindromes = function (str) { 
    let cleaned = str
        .split('')
        .filter(char => /[a-z0-9]/i.test(char))
        .join('')
        .toLowerCase();

    let reversed = cleaned.split('').reverse().join('');

    return cleaned === reversed;
  };

module.exports = palindromes;
