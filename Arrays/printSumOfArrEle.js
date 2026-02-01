// 2. Find the sum of array elements.

let arr = [1,2,3,4,5];

// 1st methood : old traditional way.
/*
let sum = 0;

for(i = 0; i < arr.length; i++){
    sum += arr[i];
}

console.log("The sum of elements of an array is: ", sum);
*/

// 2nd method : using modern javascript best method .reduce().
let sum = arr.reduce((acc, cur) => {
    return acc + cur;
}, 0);
console.log("The Sum of Elements of an array using reduce(): ", sum);