// 7. Copy one array into another.
const arr = [1,2,3,4,5];
console.log("The Array elements: ", arr);

// 1st method
/*
let copyArray = [];
for(i = 0; i < arr.length; i++){
    // copyArray += arr[i] + " ";
    copyArray.push(arr[i]);
}
console.log("The Copy array elements: ", copyArray);
*/

// 2nd method : using spread operator
let copyArray = [...arr];
console.log("The Copy array elements using ... operator: ",copyArray);

// 3rd method : using structuredClone() for deep copy.
const deepCopy = structuredClone(arr);
console.log("Deep copy elements: ",deepCopy);