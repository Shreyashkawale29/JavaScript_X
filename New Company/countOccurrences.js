function countOccurrences(str, word){

    let count=0;
    words = str.split(" ");

    for(let i=0; i < words.length; i++){

        if(words[i].toLowerCase() === word.toLowerCase()){
            count++;
        }
    }
    return count;
}

let str = "Welcome To the pubg mobo to the to do in the zone";
let words ="to";

console.log(countOccurrences(str, words));

