function Palindrome(num){

    let original = num;
    let reverse = 0;

    while (num > 0) {

        let digit = num % 10; // to remove the last digit
        reverse = reverse * 10 + digit;

        num = Math.floor(num/10); 
    }

    if (original == reverse) {

        console.log(original +" is Palindrome number.");
    }
    else{
        console.log(original +" is Not Palindrome Number.");
        
    }


}

Palindrome(4502);