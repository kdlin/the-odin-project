const removeFromArray = function(arr, ...toRemove) {
   return arr
    .filter((x) => !toRemove.includes(x))
}

// Do not edit below this line
module.exports = removeFromArray;
