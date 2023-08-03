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

let yourScore = 0;
let opponentScore = 0;

const rockButton = document.querySelector('.rock')

// console.log(rockButton)
const result = document.querySelector('.result')
const runningScore = document.querySelector('.running-score')


rockButton.addEventListener('click', function(e) {

    const computerChoice = getComputerChoice()
    const game = playGame('rock', computerChoice)
    result.textContent = `you chose rock, your opponent chose ${computerChoice}, ${game}`
    if(game === 'You win!'){
        yourScore++
    } else if (game === 'You lose!') {
        opponentScore++
    } else {

    }

    if(yourScore === 5) {
        runningScore.textContent = `your score: ${yourScore}, opponents score: ${opponentScore} YOU WIN!`

    } else if (opponentScore === 5){
        runningScore.textContent = `your score: ${yourScore}, opponents score: ${opponentScore}, YOU LOSE!`

    } else {
        runningScore.textContent = `your score: ${yourScore}, opponents score: ${opponentScore}`
    }


    console.log('your score:', `${yourScore}`)
    console.log('opponent score: ', `${opponentScore}`)
})


const paperButton = document.querySelector('.paper')

paperButton.addEventListener('click', function(e) {
    const computerChoice = getComputerChoice()
    const game = playGame('paper', computerChoice)
    result.textContent = `you chose paper, your opponent chose ${computerChoice}, ${game}`
    // console.log(playGame('paper', getComputerChoice()))
    if(game === 'You win!'){
        yourScore++
    } else if (game === 'You lose!') {
        opponentScore++
    } else {

    }
    
    if(yourScore === 5) {
        runningScore.textContent = `your score: ${yourScore}, opponents score: ${opponentScore} YOU WIN!`

    } else if (opponentScore === 5){
        runningScore.textContent = `your score: ${yourScore}, opponents score: ${opponentScore}, YOU LOSE!`

    } else {
        runningScore.textContent = `your score: ${yourScore}, opponents score: ${opponentScore}`
    }
    
    console.log('your score:', `${yourScore}`)
    console.log('opponent score: ', `${opponentScore}`)
})

const scissorsButton = document.querySelector('.scissors')

scissorsButton.addEventListener('click', function(e) {
    const computerChoice = getComputerChoice()
    const game = playGame('scissors', computerChoice)
    result.textContent = `you chose scissors, your opponent chose ${computerChoice}, ${game}`
    //console.log(playGame('scissors', getComputerChoice()))
    if(game === 'You win!'){
        yourScore++
    } else if (game === 'You lose!') {
        opponentScore++
    } else {

    }

    if(yourScore === 5) {
        runningScore.textContent = `your score: ${yourScore}, opponents score: ${opponentScore} YOU WIN!`

    } else if (opponentScore === 5){
        runningScore.textContent = `your score: ${yourScore}, opponents score: ${opponentScore}, YOU LOSE!`

    } else {
        runningScore.textContent = `your score: ${yourScore}, opponents score: ${opponentScore}`
    }

    
    console.log('your score:', `${yourScore}`)
    console.log('opponent score: ', `${opponentScore}`)
})


// const playerSelection = 'rock';
// const computerSelection = getComputerChoice();

// console.log(computerSelection, playGame(playerSelection, computerSelection));

// function game() {

//     let gameCount = 0;
//     let playerSelection;
//     let computerSelection;
//     let playerCount = 0;
//     let computerCount = 0;
//     let result;
    
//     while(gameCount < 5) {
        
//         playerSelection = prompt('choose rock paper or scissors');
//         computerSelection = getComputerChoice(); 

//         result = playGame(playerSelection, computerSelection)

//         console.log(playerSelection, computerSelection, result)

//         if(result === 'You win!'){
//             playerCount++
//         }
        
//         if(result === 'You lose!') {
//             computerCount++;
//         }

//         console.log(`you have ${playerCount} points, computer has ${computerCount} points`)

//         gameCount++
//     }

//     console.log(playerCount, computerCount)

//     if(playerCount > computerCount) {
//         return `You won ${playerCount} to ${computerCount}`
//     } else {
//         return `You lost ${computerCount} to ${playerCount}`
//     }

// }

// console.log(game());