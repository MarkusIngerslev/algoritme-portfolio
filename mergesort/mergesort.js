let mergeSortCalls = 0; // Tæller antallet af rekursive kald til mergeSort
let mergeIterations = 0; // Tæller antallet af iterationer i merge

function merge(arrayA, arrayB) {
  const arrayC = []; // Det nye array der skal returneres
  let indexA = 0;
  let indexB = 0;

  // Så længe der stadig er elementer i både arrayA og arrayB
  while (indexA < arrayA.length && indexB < arrayB.length) {
    if (arrayA[indexA] < arrayB[indexB]) {
      arrayC.push(arrayA[indexA]);
      indexA++; // Fjerner element fra arrayA ved at flytte indekset
    } else {
      arrayC.push(arrayB[indexB]);
      indexB++; // Fjerner element fra arrayB ved at flytte indekset
    }
    mergeIterations++; // Tæller hver iteration i merge
  }

  // Tilføj eventuelle resterende elementer fra arrayA
  while (indexA < arrayA.length) {
    arrayC.push(arrayA[indexA]);
    indexA++;
    mergeIterations++; // Tæller iteration for resterende elementer
  }

  // Tilføj eventuelle resterende elementer fra arrayB
  while (indexB < arrayB.length) {
    arrayC.push(arrayB[indexB]);
    indexB++;
    mergeIterations++; // Tæller iteration for resterende elementer
  }

  return arrayC; // Returner det flettede og sorterede array
}

function mergeSort(arr) {
  mergeSortCalls++; // Tæller hver gang mergeSort kaldes

  // Basis-case: hvis arrayet har 0 eller 1 element, er det allerede sorteret
  if (arr.length <= 1) {
    return arr;
  }

  // Find midten af arrayet og del det i to
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Sorter begge halvdele rekursivt og merge dem derefter
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  return merge(sortedLeft, sortedRight);
}

export { mergeSort, mergeSortCalls, mergeIterations };
