// Game variables
let humanScore = 0;
let computerScore = 0;
const scoreDisplay = document.getElementById('score');
const resultsDisplay = document.getElementById('results');

// Computer choice function
function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 0.33) return 'rock';
    if (randomNumber < 0.66) return 'paper';
    return 'scissors';
}

// Play a single round
function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let result = '';

    if (humanChoice === computerChoice) {
        result = `It's a tie! Both chose ${humanChoice}.`;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        result = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        result = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    // Update the display
    scoreDisplay.textContent = `You: ${humanScore} - Computer: ${computerScore}`;
    resultsDisplay.textContent = result;

    // Check for game winner, limit for five rounds
    // if (humanScore === 5 || computerScore === 5) {
    //     announceWinner();
    // }
}

// Announce game winner
function announceWinner() {
    const winner = humanScore === 5 ? 'You win the game!' : 'Computer wins the game!';
    resultsDisplay.textContent += ` ${winner} Game over!`;

    // Disable buttons after game ends
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
}

// Event listeners for buttons
document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));
