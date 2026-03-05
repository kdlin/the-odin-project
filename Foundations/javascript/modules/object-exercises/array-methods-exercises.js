// TODO 
// Map to names, map to objects. sort users by age, get avg age, 
// create keyed object from array 

let lelouch = { name: "Lelouch", age: 27 };
let eren = { name: "Eren", age: 28 };
let n = {name: "N", age: 30 };

let characters = [lelouch, eren, n];

// map-to-names
let names = characters.map(item => item.name);

console.log(names);


let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

// map-to-objects
let usersMapped = users.map(user => ( {
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}))


console.log(usersMapped[0].id)
console.log(usersMapped[0].fullName);

// sort users by age 
// sorts user objects by their .age
function sortByAge(arr) { 
    arr.sort((a,b) => a.age - b.age );
}

sortByAge(characters);

console.log("\nTests sortByAge");
console.log(characters[0].name, characters[1].name, characters[2].name);

// getAverageAge 
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

function getTotalAges(users) {
    return users.reduce((prev, user) => prev + user.age, 0);
}


console.log("\nTests for ages");
console.log( `Average age: ${getAverageAge(characters)}`);
console.log(`Total Ages: ${getTotalAges(characters)}`);
