// 12 . Rotate array left by 1 position.

//      Rotate array right by 1 position.

const arr = [1,2,3,4,5];
console.log("The Original Array Elements is : ", arr);

// 1st method 
// Rotate Array Left by 1.
let firstElement = arr[0];  // save first element.

for(i = 0; i < arr.length - 1; i++){
    arr[i] = arr[i+1];    // rotate elements left by 1.
}

arr[arr.length - 1] = firstElement;   // place the save element at the end.
console.log("Rotate left by 1: ", arr);

// Rotate Array Right by 1.
let lastElement = arr[arr.length - 1];  // save last element.

for(i = arr.length - 1; i > 0; i--){
    arr[i] = arr[i-1];        // rotate elements right by 1.
}

arr[0] = lastElement; // place the last element at first.
console.log("Rotate right by 1: ", arr);

// 2nd method : using shift() and unshift().
arr.push(arr.shift());  // Rotate left by 1.
console.log("Rotate left by 1 using shift(): ", arr);

arr.unshift(arr.pop()); // Rotate right by 1.
console.log("Rotate right by 1 using unshift(): ",arr);