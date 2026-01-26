// 7. Print prime numbers between 1 to 100.

let num = 100;

for(i = 2; i <= num; i++){
    let isPrime = true;

    for(j = 2; j < i; j++){
        if(i % j === 0){
            isPrime = false;
            break;
        }
    }

    if(isPrime){
        console.log(i);
    }
}
