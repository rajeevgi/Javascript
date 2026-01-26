// 1. Check whether a number is a 3-digit number.

// 1st method : using loop

/*
let num = 153;
let originalNum = num;   // save original num
let count = 0;

while(num > 0){
    num = Math.floor(num / 10); 
    count++;
}

if(count === 3){
    console.log(originalNum + " is a three digit number.");
}else {
    console.log(originalNum + " is not a three digit number.");
}
*/

// 2nd method : convert to string and then calculate length

/*
let num = 150;

if(num.toString().length === 3){
    console.log(num + " is a 3-digit.");
}else{
    console.log(num + "is not.");
}
*/

// 3rd method : using range 100 and 999.

let num = 101;

if(num >= 100 && num <= 999){
    console.log(num + " is a 3-digit.");
}else{
    console.log(num + "is not 3-digit.");
}