// 6. Reverse a number eg. 123 so output will be 321.

let num = 123;
let rev = 0, rem = 0;
let temp = num;

while(num > 0){
    rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
}

console.log(`The reverse of a number ${temp} is : `, rev);