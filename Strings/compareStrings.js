// 6. Compare two strings.
let str1 = "rajeev";
let str2 = "Rajeev";

// 1st method : using === 
/*
if(str1 === str2){
    console.log(`${str1} is equal to ${str2}.`);
}else{
    console.log(`${str1} is not equal to ${str2}.`);
}
*/

// 2nd method : more normalize way.
if(str1.toLowerCase() === str2.toLowerCase()){
    console.log(`${str1} is equal to ${str2}.`);
}else{
    console.log(`${str1} is not equal to ${str2}.`);
}

// 3rd method : loop through it.
function compareString(s1, s2) {

    if(s1.length !== s2.length) return false;

    for(i = 0; i < s1.length; i++){
        if(s1[i] !== s2[i]){
            return false;
        }
    }
    return true;
};

console.log(compareString("rajeev", "Rajeev"));