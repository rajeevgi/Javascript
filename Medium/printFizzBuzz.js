/* 4. 
    Print numbers from 1 to 100

    If divisible by 3 → Fizz

    If divisible by 5 → Buzz

    Both → FizzBuzz 
*/

let num = 100;

for(i = 1; i <= num; i++){
    let output = "";

    if(i % 3 === 0 && i % 5 === 0){
        output += "FizzBuzz";
    }else if(i % 3 === 0){
        output += "Fizz";
    }else if(i % 5 === 0){
        output += "Buzz";
    }

    console.log(output || i);
}