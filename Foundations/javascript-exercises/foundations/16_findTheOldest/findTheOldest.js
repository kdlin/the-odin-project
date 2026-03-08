const findTheOldest = function(arr) {
    let descendingAges = arr.sort((p1, p2) => { 
        let currYear = (new Date()).getFullYear();
        let p1Age = (p1.yearOfDeath || currYear) - p1.yearOfBirth;
        let p2Age = (p2.yearOfDeath || currYear) - p2.yearOfBirth;
        
        return p2Age - p1Age;
    } )

    return descendingAges[0];
};

// Do not edit below this line
module.exports = findTheOldest;
