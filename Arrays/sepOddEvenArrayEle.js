// 11. Separate even and odd numbers into two arrays.

const arr = [1,2,3,4,5,6,7,8,9,10];
console.log("The original array elements: ", arr);

// 1st method : old traditional way.
let evenArray = []; 
let oddArray = [];

for(i = 0; i < arr.length; i++){
    if(i % 2 === 0){
        // evenArray += arr[i] + " ";  // it returns the elements as a string.
        evenArray.push(arr[i]);

    }else{
        // oddArray += arr[i] + " ";   // it returns the elements as a string.
        oddArray.push(arr[i]);
    }
}
console.log("The Even Array elements are : ", evenArray);
console.log("The Odd Array elements are : ", oddArray);

// 2nd method : using filter().
const odd = arr.filter(num => num % 2 !== 0);
const even = arr.filter(num => num % 2 === 0);

console.log("The even elements using filter(): ",even);
console.log("The odd elements using filter(): ",odd);