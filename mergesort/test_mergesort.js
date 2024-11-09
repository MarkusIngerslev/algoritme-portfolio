import { mergeSort, mergeSortCalls, mergeIterations } from "./mergesort.js";

// const { mergeSort, mergeSortCalls, mergeIterations } = require("./mergesort");

// Test arrays
const testArray = [5, 8, 2, 1, 0, 4, 3, 9, 7, 6];
const sortedArray = mergeSort(testArray.slice());

console.log("\nOriginal array:", testArray);
console.log("\nSorteret array:", sortedArray);
console.log(`\nAntal rekursive kald til mergeSort: ${mergeSortCalls}`);
console.log(`Antal iterationer i merge: ${mergeIterations}`);
