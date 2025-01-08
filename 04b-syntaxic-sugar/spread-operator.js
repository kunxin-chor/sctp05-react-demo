const fruits = ["apples", "oranges", "papayas"];

// instead of:
// const cloned = [fruits[0], fruits[1], fruits[2]];
const cloned = [...fruits];

console.log(...fruits);
// => console.log("apples", "oranges", "papayas")

const cloned2 = [...fruits, "bananas"];
// => const cloned2 = ["apples", "oranges", "papayas", "bananas"];