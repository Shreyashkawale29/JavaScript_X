let str = "GeekforGeeks";

let maxchar = '';
let maxcount =0;

function maxCharacter(str){

    for(let i =0; i < str.length; i++){
        let count =0;

        for(let j=0; j< str.length; j++){
            
            if(str[i]===str[j]){

                count++;

            }
        }

        if(count > maxcount){

            maxcount = count;
            maxchar = str[i];
        }
    }

    return console.log(maxchar);
    

}

maxCharacter(str)