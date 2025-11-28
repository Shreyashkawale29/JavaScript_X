let arr = [10, 20, 4, 45, 99];

let largest = -Infinity;
let secondLargest = -Infinity;

function secondLargestElement(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      // agar naya bada element mila to purane largest ko secondLargest bana do
      secondLargest = largest;
      largest = arr[i];
      
    } else if (arr[i] > secondLargest && arr[i] < largest) {
      // agar element largest se chhota lekin secondLargest se bada hai
      secondLargest = arr[i];
    }
  }

  console.log("Second Largest:", secondLargest);
}

secondLargestElement(arr);
