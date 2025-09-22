// Max and Min Product from 2 Arrays
// Difficulty: BasicAccuracy: 58.96%Submissions: 51K+Points: 1Average Time: 20m
// Given two arrays of arr1 and arr2, the task is to calculate the product of the maximum element of the first array arr1, and minimum element of the second array arr2.

// Examples :

// let arr1 = [5, 7, 9, 3, 6, 2],  arr2 = [1, 2, 6, 1, 9]
// Output : 9
// Explanation: The max in arr1 is 9. The min element in arr2 is 1. The product is 9*1 = 9.
let arr1 = [0, 0, 0, 0],  arr2 = [1, 1, 2]
// Output : 0

function ProductArray(arr1, arr2){

    let min = arr2[0];
    let max = arr1[0];

    for(let i =0; i < arr1.length; i++){

        if(arr1[0] < arr1[i]){
            arr1[0] = arr1[i]
            max = arr1[i];
        }
    }

    for(let i = 0; i < arr2.length; i++){

        if(arr2[0] > arr2[i]){
            arr2[0] = arr2[i]
            min = arr2[i];

        }
    }


    return console.log(min*max);
     

}

ProductArray(arr1, arr2)