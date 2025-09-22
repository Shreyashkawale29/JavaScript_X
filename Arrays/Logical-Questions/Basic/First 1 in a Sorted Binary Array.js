// First 1 in a Sorted Binary Array
// Difficulty: BasicAccuracy: 49.11%Submissions: 54K+Points: 1Average Time: 20m
// Given a sorted array arr consisting of 0s and 1s. The task is to find the index (0-based indexing) of the first 1 in the given array.

// NOTE: If one is not present then, return -1.

// Examples :

let arr = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1]
// Output : 6
// Explanation: The index of first 1 in the array is 6.
// Input : arr[] = [0, 0, 0, 0]
// Output : -1
// Explanation: 1's are not present in the array.

function firstIndex(arr){

    for(let i=0; i < arr.length-1; i++){

        if(arr[i] == 1){
            return console.log(i);
        }
    }
    return console.log(-1);
    

}

firstIndex(arr);