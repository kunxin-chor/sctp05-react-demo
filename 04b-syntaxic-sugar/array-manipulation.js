const fruits = ["apples", "oranges", "pineapples", "bananas"];

// find the index of pineapples
const indexOfPineapples = fruits.findIndex(function(eachFruit){
    return eachFruit === "pineapples";
})

// filter will return an array
const longFruits = fruits.filter(function(eachFruit){
    // interested in the fruit where their length is 7 characters or more
    return eachFruit.length >= 7;
})

console.log(longFruits);

// mapping: 
const bigFruits = [];
for (let f of fruits) {
    bigFruits.push(f.toUpperCase())
}
console.log(bigFruits);

/*
const fruits = ["apples", "oranges", "pineapples", "bananas"];
*/

console.log(fruits.map(function(eachFruit){
    return eachFruit.toUpperCase()
}))