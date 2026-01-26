// 10. Check whether a character is uppercase, lowercase, digit, or special character.

let char = '1';

if(char >= 'A' && char <= 'Z'){
    console.log(char + " is a uppercase character.");
}else if(char >= 'a' && char <= 'z'){
    console.log(char + " is a lowercase character.");
}else if(char >= '0' && char <= '9'){
    console.log(char + " is a digit.");
}else {
    console.log(char + " is a special character.");
}