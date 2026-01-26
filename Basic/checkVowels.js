// 7. Check whether a character is a vowel or consonant.

let ch = 'U';
const vowels = 'aeiou';

ch = ch.toLowerCase();

if(vowels.includes(ch)){
    console.log(ch + " is a vowel.");
}else{
    console.log(ch + " is consonant.")
}