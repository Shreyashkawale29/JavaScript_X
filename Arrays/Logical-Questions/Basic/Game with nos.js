// Game with nos
// Difficulty: BasicAccuracy: 79.28%Submissions: 58K+Points: 1Average Time: 20m
// You are given an array arr[], and you have to re-construct an array arr[].
// The values in arr[] are obtained by doing Xor of consecutive elements in the array.

// Example 1:

// Input : n=5, arr[ ] = {10, 11, 1, 2, 3}
// Output : 1 10 3 1 3
// Explanation:
// At index 0, arr[0] xor arr[1] = 1
// At index 1, arr[1] xor arr[2] = 10
// At index 2, arr[2] xor arr[3] = 3
// ...
// At index 4, No element is left So, it will remain as
// it is.
// New Array will be {1, 10, 3, 1, 3}.
// Example 2:

let n=4, arr = [5, 9, 7, 6];
// Output :  12 14 1 6
// Explanation:
// At index 0, arr[0] xor arr[1] = 12
// At index 1, arr[1] xor arr[2] = 14
// At index 2, arr[2] xor arr[3] = 1
// At index 3, No element is left So, it will remain as it is.
// New Array will be {12, 14, 1, 6}.

function game_with_number(arr, n){

    for(let i=0; i <n-1; i++){

        arr[i] = arr[i] ^ arr[i + 1];

    }
    return console.log(arr);
    

}

game_with_number(arr, n);