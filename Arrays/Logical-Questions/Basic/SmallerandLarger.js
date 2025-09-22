// Smaller and Larger
// Difficulty: BasicAccuracy: 41.15%Submissions: 79K+Points: 1
// Given a sorted array arr and a value target, return an array of size 2. The first value is the number of elements less than or equal to the target, and the second value is the number of elements greater than or equal to the target.

// Examples:

// let arr = [1, 2, 8, 10, 11, 12, 19],  target = 0
// Output: 0, 7
// Explanation: There are no elements less or equal to 0 and 7 elements greater to 0.
let arr = [1, 5, 8, 12, 12, 12, 19], target = 12
// Output: 6, 4
// Explanation: There are 6 elements less or equal to 12 and 4 elements greater or equal to 12.

function getMoreAndLess(arr, target){

    let smaller =0;
    let larger =0;

    for(let i =0; i < arr.length; i++){

        if(arr[i] >= target ){

            larger++;
        }
        if(arr[i]<= target){

            smaller++;
        }
    }
    return console.log([smaller, larger]);
    

}


getMoreAndLess(arr, target);