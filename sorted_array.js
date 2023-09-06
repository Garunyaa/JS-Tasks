let nums1 = [1,3];
let nums2 = [2,4];

const mergedArray = nums1.concat(nums2);
mergedArray.sort((a,b) => {
    return a-b;
})

const length = mergedArray.length;

if(length%2 == 0) {
    let x = mergedArray[length / 2-1];
    let y = mergedArray[length / 2];
    let median = (x + y) / 2;
    console.log(`Median of the sorted array is: ${median}`);
} else {
    let median = mergedArray[Math.floor(length / 2)];
    console.log(median); 
}