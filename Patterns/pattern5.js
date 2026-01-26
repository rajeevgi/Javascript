/**
 *  A
    AB
    ABC
    ABCD

    print this pattern.
 */

let stopValue = 4;

for(i = 1; i <= stopValue; i++){

    let alphabet = "";

    for(j = 0; j < i; j++){
        alphabet += String.fromCharCode(65+j);   // 65 for 'A' and 97 for 'a'.
    }

    console.log(alphabet);
}