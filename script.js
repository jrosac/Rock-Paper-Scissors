function getComputerChoice() //function that choose a random number beetween 0 and 2 an applies a switch case for any of them.
{
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  }
  /*const computerSelection = getComputerChoice();
  console.log('Computer chose: ' + computerChoice);*/

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return `DRAW!, ${playerSelection} against ${computerSelection} `
}

    if(
        (playerSelection === "rock" && computerSelection ==="scissors" ) ||
        (playerSelection === "paper" && computerSelection ==="rock"    ) ||
        (playerSelection === "scissors" && computerSelection ==="paper") 
){
        return `Player Wins!, ${playerSelection} beats ${computerSelection}`;
}
    else{
        return`Player Loses!, ${computerSelection} beats ${playerSelection}`;
    }
}
/*const jogador = "paper"
const maquina = getComputerChoice()
const partida = playRound(jogador,maquina)
console.log(partida)*/

function game(){
    let playerScore   = 0;
    let computerScore = 0;
    
    for(let round=1;round<=5;round++){
        const playerSelection = "rock"
        const computerSelection = getComputerChoice();

        console.log(`${round}° Round`)
        const roundResult = playRound(playerSelection,computerSelection);
        console.log(roundResult)

        if(roundResult.includes("Wins!")){
            playerScore++
        }
        else if(roundResult.includes("Loses!")){
            computerScore++
        }
        
        console.log(`Score: ${playerScore} - ${computerScore}`)
        
        if(playerScore > computerScore){
            console.log( "Congrats you WIN the Game!")
        }
        else if(computerScore > playerScore){
            console.log( "Sorry you lOST the Game :(")
        }
        else{
            console.log( "it's a DRAW")
        }
        
  }
}
game();



