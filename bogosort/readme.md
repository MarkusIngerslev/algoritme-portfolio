# Bogosort

[`Bogosort`](https://en.wikipedia.org/wiki/Bogosort) er det modsatte af en effektiv sorteringsalgoritme. Hoved ideen ved `bogosort` er at den gentagne gange tilfældigt omarranger elementer, indtil de er i den **_rigtige_** rækkefølge.
Som en tilfælgdig sorteringsalgoritme er `bogosort` lidt sjov, men i praksis er den ubrugelig grundet sin ekstreme ineffektivitet.

#### Pseudokode for algoritme

```Pseudocode
bogosort(arr):
  iteration = 0

  while(!isSorted(arr)):
    shuffle(arr)
    iteration++

  print("Antal iterationer:" iteration)
  return arr
```

#### Tidskompleksitet (Big-O)

`Bogosort` har en tidskompleksitet på `O((n+1)!)`, da det i det værste tilfælde kan komme til at kræve, at alle de mulige permutationer af arrayet skal køres igennem, før den har fundet den sorterede rækkefølge.
Dette gør den ekstrem ineffektiv, hvilket også har resulteret i at den primært anvendes som en joke, eller til at illustrere ineffektive algoritmer.