const repeatString = function(str, num) {
    if (num < 0) return 'ERROR';
    let ans = ""

    for (let i = 0; i < num; i++) {
        ans += str;
    }
    return ans;
}

// Do not edit below this line
module.exports = repeatString;
