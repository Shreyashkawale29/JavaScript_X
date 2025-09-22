// Replace all 0's with 5
// Difficulty: BasicAccuracy: 75.55%Submissions: 96K+Points: 1Average Time: 15m
// You are given an integer n. You need to convert all zeroes of n to 5.

// Examples:

let n = 1004;
// Output: 1554
// Explanation: There are two zeroes in 1004 on replacing all zeroes with 5, the new number will be 1554.
// let n = 121
// Output: 121
// Explanation: Since there are no zeroes in 121, the number remains as 121.

function convertFive(num){

    let str = num.toString();
    let result = '';

    for(let i =0; i < str.length; i++){

        if(str[i]=='0'){

            result = result + '5';

        }
        else{
            result = result + str[i];
        }

    }
    return console.log(parseInt(result));
     

}

convertFive(n)
