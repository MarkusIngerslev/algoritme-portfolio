import { insertionSortShift, insertionSortSwap } from "./insertionsort.js";

// Test
const list = [5, 8, 2, 1, 0, 4, 3, 9, 7, 6];

// Test af insertionSortShift
console.log("Sorteret array:", insertionSortShift(list));

// Test af insertionSortSwap
console.log("Sorteret array:", insertionSortSwap(list));
