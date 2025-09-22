// Rock Paper Scissor Game 

function rps(user, computer){

    if(user === computer) return "Draw"

    if(user === "rock" && computer === "scissor") return "User"
    if(user === "scissor" && computer === "paper") return "User"
    if(user === "paper" && computer === "rock") return "User"

    return "Computer"


    
}

console.log(rps("rock", "scissor"))


