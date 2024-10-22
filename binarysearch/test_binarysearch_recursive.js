import binarySearchRecursive from "./binarysearch_recursive.js";

function testBinarySearchRecursive() {
    console.group("Testing binarySearchRecursive...");

    console.group("Test af nummer-søgning");
    const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
    const target = 15;
    const result = binarySearchRecursive(target, sortedArray, 0, sortedArray.length - 1);
    console.log(result); // Output: index af target-værdien (3 i dette tilfælde)
    console.groupEnd();

    console.group("Test af string-søgning");
    const sortedStringArray = ["apple", "banana", "cherry", "date"];
    const stringTarget = "cherry";
    const stringResult = binarySearchRecursive(stringTarget, sortedStringArray, 0, sortedStringArray.length - 1);
    console.log(stringResult); // Output: index af stringTarget-værdien (2 i dette tilfælde)
    console.groupEnd();

    console.groupEnd();
    console.log("Alle tests er færdige.");
}

// Kør tests
testBinarySearchRecursive();
