const leapYears = function(year) {
    const isYearDivisibleByFour = year % 4 === 0;
    const isCentury = year % 100 === 0; 
    const isDivisibleByFourHundred = year % 400 ===0;

    return isYearDivisibleByFour && (!isCentury || isDivisibleByFourHundred)
}

// Do not edit below this line
module.exports = leapYears;
 