// Find the fine
// Difficulty: BasicAccuracy: 52.46%Submissions: 55K+Points: 1Average Time: 10m
// Given an array of car numbers car[], an array of penalties fine[], and an integer value date. The task is to find the total fine which will be collected on the given date. The fine is collected from odd-numbered cars on even dates and vice versa.

// Examples:

// let date = 12, car = [2375, 7682, 2325, 2352], fine = [250, 500, 350, 200]
// Output: 600
// Explanation: The date is 12 (even), so we collect the fine from odd-numbered cars. The odd-numbered cars and the fines associated with them are as follows:
// 2375 -> 250
// 2325 -> 350
// The sum of the fines is 250+350 = 600
let date = 8, car = [2222, 2223, 2224], fine = [200, 300, 400]
// Output: 300

function totalFine(date, car, fine){

    let sum = 0; 
    
    for(let i =0; i < car.length; i++){

        if(date % 2 ==0 && car[i] % 2 != 0){
            sum = sum + fine[i];
        }
        else if(date % 2 != 0 && car[i] % 2 ==0){
            sum = sum + fine[i];
        }

    }
    return console.log(sum);
    



}

totalFine(date, car, fine);