// 4. Reverse a string.

const str = "rajeev";

// 1st method : using charAt().
let rev = "";
for(i = str.length-1; i >= 0; i--){
    rev += str.charAt(i);
}
console.log(`The reverse of string ${str} : ${rev}.`);

// 2nd method : chaining 
const revStr = str.split('').reverse().join('');
console.log(`The reverse of a string ${str} using chaining : ${revStr}`);

// 3rd method : spread way.
const reverse = [...str].reverse().join('');
console.log(`The reverse of a string ${str} using ... : ${reverse}`);
