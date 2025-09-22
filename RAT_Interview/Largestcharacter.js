let str = "Welcome to Pubg Mobile";

// 1. String ko array mein convert karo
let words = str.split(" ");
console.log(words)

// 2. Longest word rakhne ke liye variable



function Largestword(){

    let longest = words[0];

    for(let i = 0; i < words.length; i++){
        // 3. Har word ki length compare karo
       if(words[i].length > longest.length){
        longest = words[i]

       }
    }
    console.log(`The Largest number of word : `+longest)
}

Largestword();

