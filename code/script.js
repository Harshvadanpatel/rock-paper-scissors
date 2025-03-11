let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice img');
const msg = document.querySelector('#msg');
const users = document.querySelector('#userscore');
const computers = document.querySelector('#computerscore');

const gencomchoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randIdx = Math.floor(Math.random() * 3);
    return choices[randIdx];
}

const drawGame = () => {
    console.log("Draw Game");
    msg.innerText = "Game was Draw! Play Again";
    msg.style.backgroundColor = "#001B2E";
};

const showWinner = (userWin, userchoice, computerChoice) => {
    if (userWin) {
        userScore++;
        users.innerText = userScore;
        msg.innerText = `You Win! ${userchoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        computers.innerText = computerScore;
        msg.innerText = `You Lose! ${computerChoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userchoice) => {
    console.log("user choice", userchoice);
    const computerChoice = gencomchoice();
    console.log("computer choice = ", computerChoice);
    // Add logic to determine the winner and update scores
    if (userchoice === computerChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userchoice == "rock") {
            userWin = computerChoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userWin = computerChoice === "scissors" ? false : true;
        } else {
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userchoice, computerChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userchoice = choice.getAttribute('id');
        console.log("choice was clicked", userchoice);
        playGame(userchoice);
    });
});