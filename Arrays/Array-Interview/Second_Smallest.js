let arr = [10, 20, 4, 45, 99];
let smallest = Infinity;
let secondSmallest = Infinity;


function secondSmallestElement(arr){
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < smallest) {
    // agar naya chhota element milta hai
    secondSmallest = smallest;
    smallest = arr[i];
  } else if (arr[i] < secondSmallest && arr[i] > smallest) {
    // agar element smallest se bada lekin secondSmallest se chhota hai
    secondSmallest = arr[i];
  }
}

console.log("Second Smallest:", secondSmallest);

}

secondSmallestElement(arr);
