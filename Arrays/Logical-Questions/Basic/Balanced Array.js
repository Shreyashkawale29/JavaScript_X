// Balanced Array
// Difficulty: BasicAccuracy: 68.17%Submissions: 52K+Points: 1Average Time: 20m
// Given an array arr of even size, the task is to find a minimum value that can be added to an element so that the array becomes balanced. An array is balanced if the sum of the left half of the array elements is equal to the sum of the right half.

// Examples :

let arr = [1, 5, 3, 2]
// Output: 1
// Explanation: Sum of first 2 elements is 1 + 5  = 6, Sum of last 2 elements is 3 + 2  = 5, To make the array balanced you can add 1.
// let arr = [1, 2, 1, 2, 1, 3]
// Output: 2
// Explanation: Sum of first 3 elements is 1 + 2 + 1 = 4, Sum of last three elements is 2 + 1 + 3 = 6, To make the array balanced you can add 2.

function BalancedArray(arr){

    let sum1 = 0;
    let sum2 = 0;
    let n = arr.length;

    for(let i =0; i < n/2; i++){
        sum1 = sum1 + arr[i];
    }

    for(let i=n/2; i < n; i++){
        sum2 = sum2 + arr[i];
    }
    sum = Math.abs(sum1 - sum2);
    return console.log(sum);
    

}

BalancedArray(arr);