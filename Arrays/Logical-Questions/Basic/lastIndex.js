// Last index of One

// Given a string s consisting of only '0's and '1's,  find the last index of the '1' present.

// Note: If '1' is not present, return "-1"

// Examples:

// let S = "00001";
// Output: 4
// Explanation: Last index of  1 in given string is 4.
let S = "0";
// Output: -1
// Explanation: Since, 1 is not present, so output is -1.
// Expected Time Complexity: O(n)
// Expected Auxillary Space: O(1)


function lastIndex(S){

    let last = -1;
    for(let i =0; i < S.length; i++){

        if(S[i] == "1"){

            last = i;

        }
    }
    return console.log(last);
    

}

lastIndex(S);