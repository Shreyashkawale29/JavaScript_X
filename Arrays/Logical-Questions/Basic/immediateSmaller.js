// Immediate Smaller Element
// Given an integer array arr. For each element in the array, check whether the right adjacent element (on the next immediate position) of the array is smaller. If the next element is smaller, update the current index to that element. If not, then update to -1.

// Note: Update the array in itself.

// Examples:

let arr = [4, 2, 1, 5, 3]
// Output: [2, 1, -1, 3, -1]
// Explanation: Array elements are 4, 2, 1, 5, 3. Next to 4 is 2 which is smaller, so we print 2. Next of 2 is 1 which is smaller,so we print 1. Next of 1 is 5 which is greater, so we print -1. Next of 5 is 3 which is smaller, so we print 3.  Note that for last element, output is always  going to be -1 because there is no element on right.

// Input: arr[] = [4, 1]
// Output: [1, -1]
// Explanation: 4 will be updated to 1 and 1 will be updated to -1.

function immediatesmaller(arr){

    let result = [];
    for(let i = 0; i < arr.length; i++){

        if(arr[i] > arr[i +1]){
            arr[i] = arr[i +1]
            
        }else{
            arr[i] = -1
        }

        result[result.length] = arr[i] // push element without using builtin method
    }
    return console.log(result);

}

immediatesmaller(arr);