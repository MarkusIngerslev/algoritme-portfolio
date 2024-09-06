// Imports
import binarySearch from "./binarysearch.js";

window.addEventListener("load", start);

// Globale variables for test
const values = [21, 22, 23, 25, 27, 28, 29, 31, 32, 34, 35];
const ordliste = [
    "andedam",
    "andegård",
    "bondefanget",
    "bondegård",
    "børnearbejde",
    "gadefejer",
    "gær",
    "gødning",
    "gaardejer",
    "kalapøjser",
    "kalundborg",
    "kørt",
    "kårde",
    "ålborg",
    "aarhus",
];
const persons = [
    { name: "Draco Malfoy", house: "Slytherin" },
    { name: "Harry Potter", house: "Gryffindor" },
    { name: "Hermione Granger", house: "Gryffindor" },
    { name: "Neville Longbottom", house: "Gryffindor" },
    { name: "Ron Weasley", house: "Gryffindor" },
];

function start() {
    console.log("JavaScript is live! 🎉🎉");

    // Test binary search with compare function
    const index = binarySearch(25, values);
    console.log(`Found at index: ${index}`);

    // Test binary search with stringcomparefunction
    const stringIndex = binarySearch("gaardejer", ordliste);
    console.log(`Found 'gaardejer' at index: ${stringIndex}`);

    // Test binary search with namecomparefunction
    const personIndex = binarySearch("Ron Weasley", persons);
    console.log(`Found 'Ron Weasley' at index: ${personIndex}`);
}
