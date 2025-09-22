// Palindromic Array
// Difficulty: BasicAccuracy: 58.62%Submissions: 184K+Points: 1Average Time: 15m
// Given an array arr[] of positive integers. Return true if all the array elements are palindrome otherwise, return false.

// Examples:

// Input: arr[] = [111, 222, 333, 444, 555]
// Output: true
// Explanation:
// arr[0] = 111, which is a palindrome number.
// arr[1] = 222, which is a palindrome number.
// arr[2] = 333, which is a palindrome number.
// arr[3] = 444, which is a palindrome number.
// arr[4] = 555, which is a palindrome number.
// As all numbers are palindrome so This will return true.

let arr = [111, 222, 333, 444, 555];

IsPalindrome()

function IsPalindrome(num){
    
    let original = num;
    let reverse = 0;

    while(num > 0){

        let digit = num % 10;
        reverse = reverse *10 + digit;
        num = Math.floor(num / 10);

    }
    return original == reverse;

}

function IsPalindromicArray(arr){

    let count = 0;
    for(let i = 0; i < arr.length; i++){

        if(IsPalindrome(arr[i])){

            count = count + 1;
        }
    }

    if(arr[i] == arr.length){
        return true;
    }
    else{
        return false;
    }

}