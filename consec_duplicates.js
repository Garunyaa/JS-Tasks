let array = [1, 1, 2, 2, 3, 4, 3];

const newArray = array.filter((item, index) => {
    return item !== array[index + 1];
})

console.log(`Array after removing consecutive duplicates is: ${newArray}`);