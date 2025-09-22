// Strongest Neighbour
// Difficulty: BasicAccuracy: 57.04%Submissions: 51K+Points: 1
// You are given an array arr[] consisting of positive integers. Return the maximum of every adjacent pairs in the array.

// Examples:

// let arr = [1, 2, 2, 3, 4, 5]
// Output: [2, 2, 3, 4, 5]
// Explanation: Maximum of arr[0] and arr[1] is 2, that of arr[1] and arr[2] is 2, ... and so on.
let arr = [5, 5]
// Output: [5]
// Explanation: We only have two elements so max of 5 and 5 is 5 only.

function strongestNeighbour(arr){

    let result =[];
    let j =0;

    for(let i =0; i < arr.length-1; i++){

        let max;

        if(arr[i] > arr[i+1]){
            max = arr[i];

        }
        else{
            max = arr[i+1];
        }

        result[j] = max;
        j++;

    }
    return console.log(result);
    

}

strongestNeighbour(arr);