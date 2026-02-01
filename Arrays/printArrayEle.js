// 1. Declare an array and print all elements.

let arr1 = [1,2,3,4,5];

// simply we can print using console.log().
console.log("Array elements (using console) : ", arr1);

// or simply we can use for-loop to iterate the array.
let element = "";
for(i = 0; i < arr1.length; i++){
    element += arr1[i] + " ";
}
console.log("Array elements (using for-loop) : ", element);

// using for..of loop if we dont need an index i.
let elem2 = "";
for (const val of arr1) {
    elem2 += val + " ";
}
console.log("Elements using forOf: ", elem2);

// using forEach() that executes a function for every element.
arr1.forEach((val) => {
    console.log("Elements using forEach: ", val);
});

// using join().
let elem3 = arr1.join(" ");
console.log("Elements using join(): ", elem3);