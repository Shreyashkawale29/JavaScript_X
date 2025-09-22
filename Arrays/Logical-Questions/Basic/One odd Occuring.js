// One odd Occuring
// Difficulty: BasicAccuracy: 50.53%Submissions: 87K+Points: 1
// Given an array of arr[] positive integers where all numbers occur even number of times except one number which occurs odd number of times. Return that number.

// Examples:

let arr = [1, 2, 3, 2, 3, 1, 3]
// Output: 3
// Explaination: 3 occurs three times.
// Input:arr[] = [5, 7, 2, 7, 5, 2, 5]
// Output: 5
// Explaination: 5 occurs three times.

function getOccuring(arr){

    let result = 0;
    for(let i =0; i < arr.length; i++){

        result = result ^ arr[i];
    }
    return console.log(result);
    


}

getOccuring(arr);