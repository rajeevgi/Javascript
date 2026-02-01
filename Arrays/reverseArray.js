// 6. Reverse an array without using reverse().

const arr = [1,2,3,4,5];

console.log("The array elements : ", arr);

// 1st method 
/*
let rev = "";
for(i = arr.length-1; i >= 0; i--){
    rev += arr[i] + " ";
}
console.log("The revered array : ", rev);
*/

// 2nd method : using efficient swap way.
/*
let left = 0;
let right = arr.length-1;

while(left < right){
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
}

console.log("The reversed element : ", arr);
*/

// 3rd method : another array[].
/*
let reverseArray = [];

for(i = arr.length-1; i >= 0; i--){
    reverseArray.push(arr[i]);
}
console.log("The Reversed Elements : ",reverseArray);
*/

// 4th method : built-in methods
// let rev = arr.reverse();
// console.log("The Reversed Elements : ", rev);

const rev = [...arr].reverse();
console.log("The reversed elements: ", rev);