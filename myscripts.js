function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random()*3);
    return options[randomNumber];
}
// console.log(getComputerChoice());

function playGame(playerSelection, computerSelection) {
    
    const player = playerSelection.toLowerCase();

    if(player === 'rock') {
        if(computerSelection === 'Rock') {
            return 'draw'
        } else if (computerSelection === 'Paper') {
            return 'You lose!'
        } else {
            return 'You win!'
        }
    } else if(player === 'paper') {
        if(computerSelection === 'Paper') {
            return 'draw'
        } else if (computerSelection === 'Scissors') {
            return 'You lose!'
        } else {
            return 'You win!'
        }
    } else {
        if(computerSelection === 'Scissors') {
            return 'draw'
        } else if (computerSelection === 'Rock') {
            return 'You lose!'
        } else {
            return 'You win!'
        }
    }
}

// const playerSelection = 'rock';
// const computerSelection = getComputerChoice();

// console.log(computerSelection, playGame(playerSelection, computerSelection));

function game() {

    let gameCount = 0;
    let playerSelection;
    let computerSelection;
    let playerCount = 0;
    let computerCount = 0;
    let result;
    
    while(gameCount < 5) {
        
        playerSelection = prompt('choose rock paper or scissors');
        computerSelection = getComputerChoice(); 

        result = playGame(playerSelection, computerSelection)

        console.log(playerSelection, computerSelection, result)

        if(result === 'You win!'){
            playerCount++
        }
        
        if(result === 'You lose!') {
            computerCount++;
        }

        console.log(`you have ${playerCount} points, computer has ${computerCount} points`)

        gameCount++
    }

    console.log(playerCount, computerCount)

    if(playerCount > computerCount) {
        return `You won ${playerCount} to ${computerCount}`
    } else {
        return `You lost ${computerCount} to ${playerCount}`
    }

}

console.log(game());