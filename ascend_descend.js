// ascending order

let cakes = ["BlackForest", "WhiteForest", "RedVelvet", "ChocoTruffle"];

console.log(`The sorted array is (ascending): ${cakes.sort()}`);

// descending order

let array = [12, 5, 98, 27, 34];

array.sort((a, b) => {
  return b - a;
});

console.log(`The sorted array is (descending): ${array}`);