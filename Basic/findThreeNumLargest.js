// 6. Find the largest of three numbers using if-else.

let num1 = 10;
let num2 = 20;
let num3 = 30;

let max = null;

// if(num1 > num2 && num1 > num3){
//     max = num1;
//     console.log(max + " is largest.");
// }else if(num2 > num1 && num2 > num3){
//     max = num2;
//     console.log(max + " is largest.");
// }else {
//     max = num3;
//     console.log(max + " is largest");
// }

// Using Ternary Operator
max = (num1 > num2) ? num1 : (num2 > num3) ? num2 : num3;
console.log(max + " is largest.");