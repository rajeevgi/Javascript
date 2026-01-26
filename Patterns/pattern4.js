/**
 *  1
    22
    333
    4444

    print this pattern.
 */

let stopValue = 4;

for(i = 1; i <= stopValue; i++){
    
    let num = "";

    for(j = 1; j <= i; j++){
        num += i;
    }

    console.log(num);
}