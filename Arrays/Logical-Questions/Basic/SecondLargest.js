// Given an array of positive integers arr[], return the second largest element from the array. If the second largest element doesn't exist then return -1.

// Note: The second largest element should not be equal to the largest element.

// Examples:

// Input: arr[] = [12, 35, 1, 10, 34, 1]
// Output: 34
// Explanation: The largest element of the array is 35 and the second largest element is 34.
// Input: arr[] = [10, 5, 10]
// Output: 5
// Explanation: The largest element of the array is 10 and the second largest element is 5.
// Input: arr[] = [10, 10, 10]
// Output: -1
// Explanation: The largest element of the array is 10 and the second largest element does not exist.

// let array = [12, 35, 1, 10, 34, 1]; // 34

// function getSecondLargest(arr){

//     arr.sort();
    
//     console.log("Second Largest: "+arr[arr.length-2] )
// }

// getSecondLargest(array);

// let array = [12,59,3,6,9,44,2,57,3,83,946];
let array = [12,12,11];


function getSecondLargest(arr){

        if(arr.length < 2) return console.log(-1);

        arr.sort(function(a,b){
            return b - a;
        }) // Sort array in Decending Order (b-a)

        largest = arr[0];

        for(let i =1; i < arr.length; i++){
            if (largest > arr[i]) {
                return console.log(arr[i]);
            }

        }
        return console.log(-1);
         

}
getSecondLargest(array);






