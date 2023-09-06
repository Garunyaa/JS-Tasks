let array = [1, 2, 3, 3, 2, 4, 5];

const newArray = array.filter((item, index) => {
  return array.indexOf(item) === index;
});

console.log(`Array after removing duplicates is: ${newArray}`);