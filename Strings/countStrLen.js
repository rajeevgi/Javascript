// 2. Find the length of a string (without .length).

let str = "rajeev";

// 1st method : using for loop.
let count = 0;

for (const element of str) {
    count++;
}
console.log(`String length of string ${str} : ${count}`);

// 2nd method : using reduce().
const length = [...str].reduce((acc) => acc + 1, 0);
console.log("The length of string is : ",length);

// 3rd method : using .length.
let strLen = str.length;
console.log(`The length of given string ${str} is : ${strLen}.`);