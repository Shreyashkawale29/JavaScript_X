let array = [10, 2, 35, 25, 50]; // Output = 3
let x = 25;

console.log(array[3]);

function arraySearch(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
      return console.log(i);
    }
  }
  return console.log(-1);
}

arraySearch(array, x);
