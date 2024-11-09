export function insertionSortShift(arr) {
  let iterations = 0; // Tæller antallet af iterationer

  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    // Flytter værdier større end current én plads til højre
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
      iterations++; // Tæl iterationen
    }
    // Indsæt current på den rette plads
    arr[j + 1] = current;
    iterations++; // Tæl iterationen for while-loop også selvom betingelsen ikke opfyldes
  }

  console.log(`\nAntal iterationer: ${iterations}`);
  return arr;
}

export function insertionSortSwap(arr) {
  let iterations = 0; // Tæller antallet af iterationer

  // Hjælpefunktion til at bytte to værdier i arrayet
  function swap(indexA, indexB) {
    let temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
  }

  for (let i = 1; i < arr.length; i++) {
    let j = i;

    // Indre loop - kører baglæns og bytter så længe elementerne er sorteret forkert
    while (j > 0 && arr[j] < arr[j - 1]) {
      swap(j, j - 1); // Byt den nuværende værdi med den foregående
      j--; // Flyt til næste værdi bagud
      iterations++; // Tæl iterationen
    }
    iterations++; // Tæl iterationen, selv hvis while betingelse ikke opfyldes
  }

  console.log(`\nAntal iterationer: ${iterations}`);
  return arr;
}
