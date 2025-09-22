// Sum of Array
// Difficulty: BasicAccuracy: 74.98%Submissions: 132K+Points: 1Average Time: 20m
// You are given an integer array arr[]. The task is to find the sum of it.

// Examples:

// arr = [1, 2, 3, 4]
// Output: 10
// Explanation: 1 + 2 + 3 + 4 = 10.
arr = [1, 3, 3]
// Output: 7
// Explanation: 1 + 3 + 3 = 7.

function sumArray(arr){

    let sum = 0;
    for(let i =0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return console.log(sum)

}

sumArray(arr);