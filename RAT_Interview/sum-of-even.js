let number = [1, 2, 3, 4, 5, 6, 7, 8, 10];
let sum = 0;



function ans(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum = sum + arr[i];
      
    }
  }
  console.log("Sum of Even Number:"+ sum)
}

ans(number);
