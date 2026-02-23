
function camelize(str) { 
    return str 
        .split('-')
        .map(
            (word, idx) => word ? idx == 0 : word[0].toUpperCase() + word.slice(1)
        )
        .join('');
    }

function filterRange(arr, a, b) { 
    return arr
        .filter((item) => item >= a && item <= b);
}

// testsFilterRange
let arr = [5, 3, 6, 8]
let filtered = filterRange(arr, 4, 9);
console.log( filtered ); 
console.log( arr );


function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];

        // remove if outside of interval 
        if (val < a || val > b) { 
            arr.splice(i, 1);
            i--;
        }
    }
}

// tests_filterRangeInPlace
let test_ip = [5, 3, 8, 1];
filterRangeInPlace(test_ip, 1, 4);

console.log(test_ip) // should be [3, 1]


function sort_decreasing(arr) { 
    arr.sort((a, b) => b - a); // b-a = pos? then swap bc b should be before a. If neg. then order is correct
}

function sort_increasing(arr) {
    arr.sort((a, b) => a - b) // if pos then a is > so we must swap. If neg then order is correct
    
}

let sorting = [1, 7, 2, 0, 100, 234];

sort_increasing(sorting)
console.log(sorting);

sort_decreasing(sorting)
console.log(sorting);


function copySorted(arr) { 
    return [...arr].sort();
//  return arr.slice().sort(); either way works 
}

// tests for copySorted
console.log(`\nTest for copySorted()`)
let toCopy = ["Lelouch", "Ash", "Suzaku", "The_1975"];
console.log(copySorted(toCopy));



function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        array[j], array[i] = array[i], array[j];

    }




// return array with unique items in arr 
function unique(arr) { 
    return [...new Set(arr)];
}

function long_unique(arr) { 
    let unique = [];

    for (let word of arr) {
        if (!unique.includes(word)) {
            unique.push(word);
        }
    }

    return unique
}

let strings = ['Trip', 'Pikachu', 'Ash', 'Ash',
     'Pikachu', 'Haxorous', 'Zebstrika'
    ];

console.log("\nUnique Tests")
console.log(long_unique(strings));
console.log(unique(strings));
