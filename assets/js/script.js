
// Setting the scores and selecting our HTML elements.
let playerScore = 0;
let computerScore = 0;

const playerScoreSpan = document.getElementById("player_score");
const computerScoreSpan = document.getElementById("computer_score");
const scoreBoardDiv = document.querySelector(".score_board");
const resultDiv = document.querySelector(".outcome");
const rockDiv = document.getElementById("r") ;
const paperDiv = document.getElementById("p") ;
const scissorsDiv = document.getElementById("s") ;

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

/**
 * Game Function
 */

function game(playerChoice){
    const computerChoice = getComputerChoice();
    switch (playerChoice + computerChoice ){
            case "rs":
            case "pr":
            case "sp":
                wins(playerChoice , computerChoice);
                break;
            case "rp":
            case "ps":
            case "sr":
                loser(playerChoice , computerChoice);
                break;
            case "rr":
            case "pp":
            case "ss":
               draw(playerChoice , computerChoice);
                break;

    }

}

// functions to let player know computer choice and who won 


function wins(playerChoice , computerChoice){
    playerScore++;
    playerScoreSpan.innerHTML = playerScore;
    resultDiv.innerHTML = convertToWord (playerChoice) + " DESTROYSSS  " + convertToWord(computerChoice) + "  VICTORYYYY!!! "  ;

}

function loser(playerChoice , computerChoice){
    computerScore++;
   computerScoreSpan.innerHTML = computerScore;
    resultDiv.innerHTML = convertToWord (playerChoice) + " DESTROYSSS  " + convertToWord(computerChoice) + "  You Lose!!! "  ;
}

function draw(playerChoice , computerChoice){
    console.log('draw');
    resultDiv.innerHTML = " Too predictable - its a draw :(  "  ;
}



/**
 * selectors for the game options 
 * RPS 
 */

 function main(){
    rockDiv.addEventListener('click',function(){
    game("r");
    });

    paperDiv.addEventListener('click',function(){
        game("p");
    });

    scissorsDiv.addEventListener('click',function(){
        game("s");
});

}

main();

//changes R, P , S to the full names 


function convertToWord(letter){
    if ( letter === "r" ) return "Rock";
    if ( letter === "p" ) return "Paper";
    if ( letter === "s" ) return "Scissors";
}

