// Given a non-empty sequence of characters s, return true if sequence is Binary, else return false.

// Examples:

// let s = "101";
// Output: true
// Explanation: Since string contains only '0' and '1', output is true.
let s = "75";
// Output: false
// Explanation: Since string contains digits other than '0' and '1', output is false.

function BinaryString(s) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "0" && s[i] !== "1") {
      return false;
    }
  }
  return true;
}

console.log(BinaryString(s));
