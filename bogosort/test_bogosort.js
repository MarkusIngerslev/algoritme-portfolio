import bogosort from "./bogosort.js";

// Test array
const testArray = [3, 1, 4, 1, 5, 9, 2, 6];

// Test bogosort og print det sorterede array
console.log("\nFør sortering:", testArray);
const sortedArray = bogosort(testArray);
console.log("Efter sortering:", sortedArray);
