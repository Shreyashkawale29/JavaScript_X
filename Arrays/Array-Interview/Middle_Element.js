let arr = [10, 20, 4, 45, 99, 50, 30];

let Middle = arr[0];

function MiddleElement(arr) {
  for (let i = 0; i <= arr.length / 2; i++) {
    Middle = arr[i];
  }
  console.log(Middle);
}

MiddleElement(arr);
