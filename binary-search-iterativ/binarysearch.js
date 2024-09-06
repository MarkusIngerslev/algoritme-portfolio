"use strict";

window.addEventListener("load", start);

function start() {
    console.log("JavaScript is live! 🎉🎉");
}

function binarySearch(search, values, comparefunc) {
    let min = 0;
    let max = values.length - 1;
    let found = false;
    let middle;

    // check if comparefunc is provided
    if (!comparefunc) {
        if (typeof search === "number") {
            comparefunc = compare; // number compare
        } else if (typeof search === "string") {
            comparefunc == stringCompare; // string compare
        }
    }

    while (!found && min <= max) {
        middle = Math.floor((min + max) / 2);
        const comparison = comparefunc(search, values[middle]);

        if (comparison === 0) {
            found = true;
        } else if (comparison < 0) {
            max = middle - 1;
        } else {
            min = middle + 1;
        }
    }

    if (found) {
        return middle;
    } else {
        return -1;
    }
}

function compare(a, b) {
    return a - b;
}

function stringCompare(a, b) {
    return a.localeCompare(b);
}

function nameCompare(a, person) {
    return a.localeCompare(person.name);
}
