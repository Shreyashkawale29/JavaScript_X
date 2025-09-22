function Ispalindrome(num) {
  let original = num;
  let reverse = 0;

  while (num > 0) {
    let digit = num % 10; // remainder ke liye modulus use kiya hai // yana par last digit ko nikalne ke liye [num % 10] use kiya hai.
    reverse = reverse * 10 + digit;

    num = Math.floor(num / 10); // Math.floor function decimal numbers ko remove krne ke liye use kiya hai.

  }
    
  if(original == reverse){
    console.log(original + ' is palindrome number');
  }
  else{
    console.log(original +' is Not palindrome number');
  }

}

Ispalindrome(121);
