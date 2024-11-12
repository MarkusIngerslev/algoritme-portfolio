export function shuffle(arr) {
  // Loop over array men start fra slutningen
  for (let i = arr.length - 1; i > 0; i--) {
    // Find et tilfældigt index fra 0 til i, inklusive i selv
    const j = Math.floor(Math.random() * (i + 1));
    // Byt elementet på index i med elementet på index j
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  // Returner det shufflede array
  return arr;
}
