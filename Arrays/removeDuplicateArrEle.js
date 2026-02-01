// 8. Remove duplicate elements from an array.

const arr = [1,1,2,3,4,5,5];
console.log("Original Array Elements: ",arr);

// 1st method : using set(), industry best practice.
/*
let unique = [...new Set(arr)];
console.log("Unique array elements: ",unique);
*/

// 2nd method : using splice() has limitation.
/*
for(i = 0; i < arr.length; i++){
    if(arr[i] === arr[i+1]){
        arr.splice(i+1, 1);
    }
}
console.log("Array elements after splicing: ",arr);
*/

// 3rd method : using filter() to resolve splice() drawback.
const unique = arr.filter((item, index) => {
    return arr.indexOf(item) === index;
});

console.log("The unique elements are: ", unique);