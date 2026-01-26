// 5. Find the factorial of a number.

let num = 5;
let fact = 1;

for(i = num; i >= 1; i--){
    fact *= i;
}

console.log(`The factorial of a number ${num} is : `, fact);