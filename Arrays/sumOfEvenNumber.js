let number = [1, 2, 3, 4, 5, 6];
let sum = 0;

function sumofeven(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sum = arr[i] + sum;
    }
  }
  console.log("Sum of even numbers:", sum);
}
sumofeven(number);
