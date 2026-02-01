// 9. Sort an array in ascending order (without sort()).

const arr = [10,30,20,40,50];
console.log("The original array elements: ", arr);

// 1st method : using nested loop and swap.
/*
for(i = 0; i < arr.length; i++){

    for(j = 0; j < arr.length-1-i; j++){

        if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }

    }
}
console.log("The sorted array elements is: ",arr);
*/

// 2nd method : using sort().
let asc = arr.sort((a, b) => a - b);
console.log("The ascending elements: ", asc);
let dsc = arr.sort((a, b) => b - a);
console.log("The descending elements: ", dsc);