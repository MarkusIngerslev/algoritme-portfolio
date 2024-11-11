export default function bogosort(arr) {
  let iterations = 0;

  // Funktion til at tjekke om arrayet er sorteret
  function isSorted(array) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        return false;
      }
    }
    return true;
  }

  // Funktion til at "shuffle" arrayet tilfældigt
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Selve bogosort-algoritmen
  while (!isSorted(arr)) {
    shuffle(arr);
    iterations++;
  }

  console.log("\nAntal iterationer:", iterations);
  return arr;
}
