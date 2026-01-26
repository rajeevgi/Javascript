// 3. Check whether a number is Armstrong.

let num = 153; 

// 1st method : using loop
/*
let sum = 0, rem = 0;
let temp = num;

while(num > 0){
    rem = num % 10;
    sum = sum + Math.pow(rem, 3);
    num = Math.floor(num / 10);
}

if(temp === sum){
    console.log(temp + " is a armstrong number.");
}else{
    console.log(temp + " is not a armstrong number.");
}
*/

// 2nd method : using split(), reduce().
let numStr = num.toString();   // convert into string
let digits = numStr.length;  // count digits

let sum = numStr.split('').reduce((acc, char) => { 
    return acc + (Number(char) ** digits)
}, 0);

console.log(num === sum ? "Armstrong" : "Not armstrong");