let iterationCount = 0; // Global variable til at tælle iterationer

export default function binarySearchRecursive(search, values, start, end, comparator) {
    // Tæl iterationer
    iterationCount++;

    // Tjek for om værdien findes i arrayet
    if (start > end) {
        console.log(`Antal iterationer: ${iterationCount}`);
        return -1;
    }

    // Hvis ingen comparator er givet, definer en default (nummer sammenligning)
    if (!comparator) {
        comparator = function (a, b) {
            if (typeof a === "number" && typeof b === "number") {
                return a - b; // Default number comparison
            } else if (typeof a === "string" && typeof b === "string") {
                return a.localeCompare(b); // String comparison
            } else {
                throw new Error("Comparator kan ikke sammenligne forskellige typer.");
            }
        };
    }

    // Find midten af det nuværende array-interval
    const middle = Math.floor((start + end) / 2);
    const comparison = comparator(search, values[middle]);

    // Hvis værdien blev fundet
    if (comparison === 0) {
        console.log(`Antal iterationer: ${iterationCount}`);
        return `index i arrayet: ${middle}`;
    }

    // Hvis værdien er mindre, søg i den venstre halvdel
    if (comparison < 0) {
        return binarySearchRecursive(search, values, start, middle - 1, comparator);
    }

    // Hvis værdien er større, søg i den højre halvdel
    return binarySearchRecursive(search, values, middle + 1, end, comparator);
}
