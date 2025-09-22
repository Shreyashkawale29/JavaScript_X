// Triplet Family
// Difficulty: BasicAccuracy: 50.0%Submissions: 50K+Points: 1
// Given an array arr of integers. First sort the array then find whether three numbers are such that the sum of two elements equals the third element.

// Example:

// let arr = [1, 2, 3, 4, 5]
// Output: true
// Explanation: The pair (1, 2) sums to 3.
let arr = [3, 4, 5]
// Output: false
// Explanation: No triplets satisfy the condition.

function TripletFamily(arr){

    for(let i=0; i < arr.length; i++){
        for(j = i+1; j < arr.length; j++){
            for(let k=0; k < arr.length; k++){

                if(k !== i && k !==j && arr[i] + arr[j] === arr[k]){
                    return console.log(true);
                    ;

                }
            }
        }
    }
    return console.log(false);
    ;

}

TripletFamily(arr);