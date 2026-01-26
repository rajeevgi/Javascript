/**
 *  1
    12
    123
    1234

    print this pattern.
 */

let stopValue = 4;

for(i = 1; i <= stopValue; i++){
    
    let num = "";

    for(j = 1; j <= i; j++){
        num += j;
    }

    console.log(num);
}