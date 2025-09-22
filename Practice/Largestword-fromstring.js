let mystring = "User kkite to you rat my Name is Hello Largestword from the string largestwordfromstring";

let word = mystring.split(" ");
console.log(word);

let largest = word[0];

function largestword(word){

    for(let i=0; i < word.length; i++){

        if(word[i].length > word[0].length){

            largest = word[i];

        }

    }
    return console.log(largest);
    

}

largestword(word)