// 5. Search an element in an array (linear search).

const arr = [1,2,3,4,5];
console.log("Array Elements: ",arr);
let search = 1;  


// 1st method : Old traditional way.
/*
for(i = 0; i < arr.length; i++){
    if(arr[i] === search){
        console.log(`${search} found at index: `, i+1);
        break;
    }
}

if(!search){
    console.log("No element found!");
}
*/

// 2nd method : using built-in method indexOf().
const index = arr.indexOf(search);

if(index !== -1){
    console.log(`${search} Found at index : ${index}.`);
}else{
    console.log("Not found!");
}

// 3rd method : using includes().
if(arr.includes(search)){
    console.log(`${search} is exists.`);
}else{
    console.log("Not exists!");
}