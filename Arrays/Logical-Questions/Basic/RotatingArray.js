// Rotating an Array
// Difficulty: BasicAccuracy: 44.48%Submissions: 122K+Points: 1Average Time: 20m
// Given an array arr[]. The task is to rotate the array by d elements where d ≤ arr.size.

// Examples:

// Input: arr[] = [-1, -2, -3, 4, 5, 6, 7], d = 2
// Output: [-3, 4, 5, 6, 7, -1, -2]
// Explanation: 
// Rotate by 1: [-2, -3, 4, 5, 6, 7, -1]
// Rotate by 2: [-3, 4, 5, 6, 7, -1, -2]
arr = [1, 3, 4, 2], d = 3 
// Output: [2, 1, 3, 4]
// Explanation: After rotating the array three times, the first three elements shift one by one to the right.

function rotatingArray(d, arr){

    d = d % arr.length; // // if the value of d > arr.length to wo remaine

    for(let i = 0; i < d; i++){

        let temp = arr[0]; // // take the first element

        for(let j = 0; j < arr.length-1; j++){

            arr[j] = arr[j+1]; // shift the array in right side
        }

        arr[arr.length-1] = temp; //  put the last element at first

    }
    return console.log(arr);

}

rotatingArray(d, arr);