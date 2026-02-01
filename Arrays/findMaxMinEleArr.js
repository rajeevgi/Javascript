// 4. Find the largest and smallest element in an array.

let arr = [10,20,30,40,50];

// 1st method : old traditional way.
/*
let max = min = arr[0];

for(i = 0; i < arr.length; i++){

    if(max < arr[i]){
        max = arr[i];
    }

    if(min > arr[i]){
        min = arr[i];
    }
}

*/

// 2nd method : Modern javascript built-in methods.
const max = Math.max(...arr);
const min = Math.min(...arr);

console.log("The Largest Elements from an array is : ", max);
console.log("The Smallest Elements from an array is : ", min);