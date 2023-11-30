function getComputerChoice() 
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

/*function game(){
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
game();*/

let playerScore = 0;
let computerScore = 0;

function playerChoice(playerSelection) {
    const result = document.getElementById('output');
  
    // Limpe o conteúdo anterior
    result.innerHTML = '';
  
    const computerSelection = getComputerChoice();
  
    result.innerHTML += `<p>Player:  ${playerSelection}<br>Computer:  ${computerSelection}</p>`;
  
    const roundResult = playRound(playerSelection, computerSelection);
    result.innerHTML += `<p>${roundResult}</p>`;
  
    
    if (roundResult.includes('Win')) {
      playerScore++;
    } else if (roundResult.includes('Lose')) {
      computerScore++;
    }
  
    result.innerHTML += `<p>Score - You: ${playerScore}, Computer: ${computerScore}</p>`;
    
    if (playerScore === 5 || computerScore === 5) {
      endGame();
    }
  }
  

function endGame() {
  const result = document.getElementById('output');
  
  if (playerScore > computerScore) {
    result.innerHTML += '<p>You WIN the game :)</p>';
  } else if (computerScore > playerScore) {
    result.innerHTML += '<p>You LOSE the game :(</p>';
  } else {
    result.innerHTML += "<p>It's a DRAW :| </p>";
  }

  playerScore = 0;
  computerScore = 0;
}





