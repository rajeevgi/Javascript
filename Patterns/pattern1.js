/**
 *  *
    **
    ***
    ****
    *****

    Print this pattern.
 */

let stopValue = 5;

for(i = 1; i <= stopValue; i++){
    let star = "";

    for(j = 1; j <= i; j++){
        star += "*";
    }
    
    console.log(star);
}