// 5. Find the largest of two numbers.

let num1 = 10;
let num2 = 20;

let largest = null;

// Using if-else

// if(num1 > num2){
//     largest = num1;
//     console.log("The largest number between " + num1 + " and " + num2 + " is : ",largest);
// }else if(num2 > num1){
//     largest = num2;
//     console.log("The largest number between " + num1 + " and " + num2 + " is : ",largest);
// }else {
//     console.log(num1 + " is equal to " + num2);
// }

// Using Ternary Operator

largest = (num1 > num2) ? num1 : num2;
console.log("The largest number is : ",largest);