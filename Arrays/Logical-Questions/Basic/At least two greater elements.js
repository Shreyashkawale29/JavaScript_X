// At least two greater elements
// Difficulty: BasicAccuracy: 58.49%Submissions: 60K+Points: 1
// Given an array arr of distinct elements, the task is to return an array of all elements except the two greatest elements in sorted order.

// Examples:

let arr = [2, 8, 7, 1, 5]
// Output: [1, 2, 5] 
// Explanation: Here we return an array contains 1 , 2, 5 and we leave two greatest elements 7 & 8. 
// Input: arr[] = [7, -2, 3, 4, 9, -1]
// Output: [-2, -1, 3, 4]
// Explanation: Here we return an array contains -2 , -1, 3, 4 and we leave two greatest elements 7 & 9. 


function twogreaterelements(arr){


    // arr.sort((a,b)=> a-b); // soft in accending order.
    // arr.length = arr.length -2;
    // return console.log(arr);
    



    for(let i =0; i < arr.length-1; i++){

        for(let j=0; j < arr.length; j++){

            if(arr[j] > arr[j+1]){

                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    arr.length = arr.length -2;
    return console.log(arr);
    

}

twogreaterelements(arr);