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
        (playerSelection === "rock" && computerSelection ==="scissors") ||
        (playerSelection === "paper" && computerSelection ==="rock"   ) ||
        (playerSelection === "scissors" && computerSelection ==="paper") 
){
        return `Player Wins!, ${playerSelection} beats ${computerSelection}`
}
    else{
        return`Player Loses!, ${computerSelection} beats ${playerSelection}`
    }
}
const jogador = "paper"
const maquina = getComputerChoice()
const partida = playRound(jogador,maquina)
console.log(partida)