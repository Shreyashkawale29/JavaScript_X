let a = [1, 2, 2, 3]
let b = [1, 2, 6]

function subsetArray(a, b){

    let flag = false;
    for(let i=0; i<b.length; i++ ){
        flag = false;

        for(let j=0; j < a.length; j++){

            if(b[i]===a[j]){
                flag = true;
                break;

            }

        }
        if(!flag){
            break;
        }
    }
    return console.log(flag);
    

}

subsetArray(a, b);