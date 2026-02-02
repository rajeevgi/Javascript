// 1. Print each character of a string.

let str = "Rajeev";
console.log("Strings before iteration: ",str);

// 1st method : using simple for-loop.
console.log("String Iteration using for-loop:");
for(i = 0; i < str.length; i++){
    console.log(str[i]);
}

// 2nd method : using charAt().
console.log("String iteration using charAt():");
for(i = 0; i < str.length; i++){
    console.log(str.charAt(i));
}

// 3rd method : using forOf loop.
console.log("String Iteration using forOf loop: ");
for (const element of str) {
    console.log(element);
}

// 4th method : Array Spread way.
console.log("String Iteration using array spread way: ");
const chars = [...str];
chars.forEach(chars => console.log(chars));