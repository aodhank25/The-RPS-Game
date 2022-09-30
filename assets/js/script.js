
// Setting the scores and selecting our HTML elements.
const playerScore = 0;
const computerScore = 0;

const playerScoreSpan = document.getElementById("player_score");
const computerScoreSpan = document.getElementById("computer_score");
const scoreBoardDiv = document.querySelector(".score_board");
const resultDiv = document.querySelector(".outcome")
const rockDiv = document.getElementById("r") 
const paperDiv = document.getElementById("p") 
const scissorsDiv = document.getElementById("s") 

/**
 * Game function 
 * compares player choice to computer choice
 * computer choice and player choice
 */

function getComputerChoice(){
    const choices =['r','p', 's'];
   const randomNumber= Math.floor(Math.random() * 3);
   return choices[randomNumber];
}

console.log(getComputerChoice())

function game(playerChoice){
    const computerChoice

}

/**
 * selectors for the game options 
 * RPS 
 */

 function main(){
    rockDiv.addEventListener('click',function(){
    game("r");
    })

    paperDiv.addEventListener('click',function(){
        game("p");
    })

    scissorsDiv.addEventListener('click',function(){
        game("s");
})

}



