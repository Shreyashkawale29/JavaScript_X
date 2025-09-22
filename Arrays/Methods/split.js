let str = "Welcome to Pubg Mobile";

// 1. String ko array mein convert karo
let words = str.split(" ");
console.log(words)

// 2. Longest word rakhne ke liye variable
let longest = "";


function Largestword(){

    for(let i = 0; i < words.length; i++){
        // 3. Har word ki length compare karo
       if(words.length > longest.length){
        longest = words[i]

       }
    }
    console.log(`The Largest number of word : `+longest)
}


Largestword();

