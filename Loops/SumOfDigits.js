// 7. Find the sum of digits of a number.

let num = 123;
let sum = 0, rem = 0;
let temp = num;

while(num > 0){
    rem = num % 10;
    sum = sum + rem;
    num = Math.floor(num/10);
}

console.log(`The sum of digits of number ${temp} is : `, sum);