// ARRAYS 
// 3 main manipulations
// mapping: create a new array from the original array, but
//    each element is transformed
// filter: create a new array from the original array,
// but the new array will only keep elements
// that matches a certain criteria

const fruits = ["apples", "pear", "oranges", "bananas", "fig"];

// filter the array so that only fruits with
// at least 5 character are in the new array
const moreThanFive = [];
for (let f of fruits) {
    if (f.length >= 5) {
        moreThanFive.push(f);
    }
}
console.log(moreThanFive);

const results = fruits.filter(function(f){
    return f.length >= 5;
})