// 3. Find the average of array elements.

// 1st method 
/*
const arr = [1,2,3,4,5];
let totolEle = arr.length;

let sum = arr.reduce((acc, curr) => {
    return acc + curr;
}, 0);

let avg = sum / totolEle;
console.log("The average of array elements is : ", avg);
*/

// 2nd method
const arr = [1,2,3,4,5];

const getAverage = (numbers) => {
    if(numbers.length === 0) return 0;  // check for empty array.

    return numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;
};

console.log(getAverage(arr));
console.log(getAverage([]));