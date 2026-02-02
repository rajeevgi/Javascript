// 3. Count vowels and consonants.

const str = "rajeev";
const vowels = "aeiouAEIOU";

let countVowels = 0;
let countConsonants = 0;

for (const char of str) {
    if(/[a-zA-z]/.test(char)){
        if(vowels.includes(char)){
            countVowels++;
        }else{
            countConsonants++;
        }
    }
}

console.log(`Vowels: ${countVowels}`);
console.log(`Consonants: ${countConsonants}`);