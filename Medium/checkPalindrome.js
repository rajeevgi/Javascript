// 2. Check whether a number is palindrome.

let num = 153;

// 1st method : using loop

/*
let rem = 0, rev = 0;
let temp = num;

while(num > 0){
    rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
}

if(temp ===  rev){
    console.log(temp + " is a palindrome number.");
}else{
    console.log(temp + " is not a palindrome number.")
}
*/

// 2nd method 
/**
 * step 1 : Convert number into string.
 * step 2 : Split it into array.
 * step 3 : Reverse the array.
 * step 4 : Again covert into string
 */
let isPalindrome = num.toString() === num.toString().split('').reverse().join('');
console.log(isPalindrome ? "Yes" : "No");