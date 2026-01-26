// 5. Check whether the number is prime number or not.

let num = 5;
let count = 0;

// 1st method
/*
for(i = 1; i <= num; i++){
    if(num % i === 0){
        count++;
    }
}

if(count === 2){
    console.log(num + " is a prime number.");
}else{
    console.log(num + " is not a prime number.");
}
*/

// 2nd method
/*
for(i = 2; i <= num/2; i++){
    if(num % i === 0){
        count++;
        break;
    }
}

if(count === 0  && num > 1){
    console.log(num + " is a prime number.");
}else{
    console.log(num + " is not a prime number.");
}
*/

// 3rd method

let isPrime = true;

for(i = 2; i <= num/2; i++){
    if(num % i === 0){
        isPrime = false;
        break;
    }
}

if(isPrime){
    console.log(num + " is a prime number.");
}else{
    console.log(num + " is not a prime number.");
}