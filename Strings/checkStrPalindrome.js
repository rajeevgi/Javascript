// 5. Check if a string is palindrome.

const str = "Nitin";

// 1st method : using charAt().
const temp = str.toLowerCase();
let rev = "";

for(i = temp.length-1; i >= 0; i--){
    rev += temp.charAt(i);
}

if(rev === temp){
    console.log(`The given string ${str} is Palindrome.`);
}else{
    console.log(`The given string ${str} is not Palindrome.`);
}