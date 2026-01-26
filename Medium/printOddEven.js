// 6. Print odd and even numbers between 1 to 50.

let num = 50;
let evenNum = "";
let oddNum = ""; 

for(i = 1; i <= num; i++){

    if(i % 2 === 0){
        evenNum += i + " ";
    }

    if(i % 2 !== 0){
        oddNum += i + " ";
    }

}

console.log("Even numbers : ", evenNum);
console.log("Odd numbers : ", oddNum);