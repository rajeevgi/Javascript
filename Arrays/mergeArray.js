// 10. merge two arrays.

const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,1];

// 1st method : using + operator and concat().
// const mergeArray = arr1 + " " + arr2;
const mergeArray = arr1.concat(arr2);
console.log("The Merge elements using concatenation: ", mergeArray);

// 2nd method : using spread operator.
const newArray = [...arr1, ...arr2];
console.log("The new merge array elements : ", newArray);

// 3rd method : unique elements merge and remove duplicate elements.
const uniqueArray = [...new Set([...arr1, ...arr2])];
console.log("Merged and unique elements : ", uniqueArray);