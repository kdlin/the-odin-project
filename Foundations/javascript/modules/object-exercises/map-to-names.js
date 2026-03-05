let lelouch = { name: "Lelouch", age: 27 };
let eren = { name: "Erene", age: 28 };
let n = {name: "N", age: 30 };

let users = [lelouch, eren, n];

let names = users.map(item => item.name);

alert(names);

