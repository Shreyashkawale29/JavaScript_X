let arr = [10, 20, 4, 45, 99, 50, 30];

let largest = arr[0];

function LargestElement(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  console.log(largest);
}

LargestElement(arr);
